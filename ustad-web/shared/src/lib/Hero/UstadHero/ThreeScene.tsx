'use client';

import { useRef, useMemo, useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { debounce } from 'lodash';
import html2canvas from 'html2canvas';

/** Style Imports */
import styles from '../../../styles/UstadHero.module.scss';

// Dynamically import Three.js and React Three Fiber
const THREE = dynamic(() => import('three'), { ssr: false });
const { Canvas, useFrame, useThree } = dynamic(
  () =>
    import('@react-three/fiber').then((mod) => ({
      Canvas: mod.Canvas,
      useFrame: mod.useFrame,
      useThree: mod.useThree,
    })),
  { ssr: false }
);

/** Shader Imports */
import { vertexShader } from './shaders/vertex';
import { fragmentShader } from './shaders/fragment';

interface ShaderMaterialWithUniforms {
  uniforms: {
    uTexture: { value: any };
    uMouse: { value: { x: number; y: number } };
  };
}

const useDomToCanvas = (domEl: HTMLElement | null) => {
  const [texture, setTexture] = useState<any>();

  useEffect(() => {
    if (!domEl || typeof window === 'undefined') return;

    const convertDomToCanvas = async () => {
      try {
        const canvas = await html2canvas(domEl, {
          backgroundColor: null,
          logging: false,
          useCORS: true,
        });
        if (THREE) {
          const texture = new THREE.CanvasTexture(canvas);
          texture.needsUpdate = true;
          setTexture(texture);
        }
      } catch (error) {
        console.error('Error converting DOM to canvas:', error);
      }
    };

    convertDomToCanvas();

    const debouncedResize = debounce(() => {
      convertDomToCanvas();
    }, 100);

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [domEl]);

  return texture;
};

const Scene = () => {
  const state = useThree();
  const { width, height } = state.viewport;
  const [domEl, setDomEl] = useState<HTMLElement | null>(null);

  const materialRef = useRef<ShaderMaterialWithUniforms>();
  const textureDOM = useDomToCanvas(domEl);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: textureDOM },
      uMouse: { value: { x: 0, y: 0 } },
    }),
    [textureDOM]
  );

  useFrame((state) => {
    if (!materialRef.current) return;

    const mouse = state.mouse;
    if (THREE) {
      materialRef.current.uniforms.uMouse.value.x = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uMouse.value.x,
        mouse.x,
        0.1
      );
      materialRef.current.uniforms.uMouse.value.y = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uMouse.value.y,
        mouse.y,
        0.1
      );
    }
  });

  if (typeof window === 'undefined') return null;

  return (
    <>
      <div
        ref={(el) => setDomEl(el)}
        className={styles['hero__header']}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: -1,
        }}
      >
        <span className={styles['hero__header--label']}>
          It's Easy to Get Your Driver's License
        </span>
        <h1 className={styles['hero__header--title']}>yesiLdefter</h1>
      </div>
      <mesh>
        <planeGeometry args={[width, height, 32, 32]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
        />
      </mesh>
    </>
  );
};

const ThreeScene = () => {
  if (typeof window === 'undefined') return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

// Export as a dynamic component with no SSR
export default dynamic(() => Promise.resolve(ThreeScene), {
  ssr: false,
});
