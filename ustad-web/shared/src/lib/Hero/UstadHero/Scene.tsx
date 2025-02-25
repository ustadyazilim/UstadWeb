'use client';

import { useRef, useMemo, useState } from 'react';
import type { RootState } from '@react-three/fiber/dist/declarations/src/core/store';
import {
  useFrame,
  useThree,
} from '@react-three/fiber/dist/declarations/src/native';
import type { ShaderMaterial } from 'three/src/materials/ShaderMaterial';
import type { Texture } from 'three/src/textures/Texture';
import { CanvasTexture, MathUtils } from 'three';
import { debounce } from 'lodash';
import html2canvas from 'html2canvas';

/** Style Imports */
import styles from '../../../styles/UstadHero.module.scss';

/** Shader Imports */
import { vertexShader } from './shaders/vertex';
import { fragmentShader } from './shaders/fragment';

interface CustomShaderMaterial extends ShaderMaterial {
  uniforms: {
    uTexture: { value: Texture | null };
    uMouse: { value: { x: number; y: number } };
  };
}

const useDomToCanvas = (domEl: HTMLElement | null) => {
  const [texture, setTexture] = useState<Texture | null>(null);

  const convertDomToCanvas = async () => {
    if (!domEl) return;
    try {
      const canvas = await html2canvas(domEl, {
        backgroundColor: null,
        logging: false,
        useCORS: true,
      });
      const texture = new CanvasTexture(canvas);
      texture.needsUpdate = true;
      setTexture(texture);
    } catch (error) {
      console.error('Error converting DOM to canvas:', error);
    }
  };

  const debouncedResize = debounce(() => {
    convertDomToCanvas();
  }, 100);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', debouncedResize);
    convertDomToCanvas();
  }

  return texture;
};

const Scene = () => {
  const { viewport } = useThree();
  const { width, height } = viewport;
  const [domEl, setDomEl] = useState<HTMLElement | null>(null);

  const materialRef = useRef<CustomShaderMaterial>(null!);
  const textureDOM = useDomToCanvas(domEl);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: textureDOM },
      uMouse: { value: { x: 0, y: 0 } },
    }),
    [textureDOM]
  );

  useFrame((state: RootState) => {
    if (!materialRef.current) return;

    const mouse = state.mouse;
    materialRef.current.uniforms.uMouse.value.x = MathUtils.lerp(
      materialRef.current.uniforms.uMouse.value.x,
      mouse.x,
      0.1
    );
    materialRef.current.uniforms.uMouse.value.y = MathUtils.lerp(
      materialRef.current.uniforms.uMouse.value.y,
      mouse.y,
      0.1
    );
  });

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

export default Scene;
