import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import html2canvas from 'html2canvas'; // You'll need to install this: npm install html2canvas
import { debounce } from 'lodash'; // Install if not already: npm install lodash

// Custom hook to convert DOM to canvas texture
const useDomToCanvas = (domEl: HTMLElement | null) => {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    if (!domEl) return;

    const convertDomToCanvas = async () => {
      try {
        const canvas = await html2canvas(domEl, { backgroundColor: null });
        const canvasTexture = new THREE.CanvasTexture(canvas);
        canvasTexture.needsUpdate = true;
        setTexture(canvasTexture);
      } catch (err) {
        console.error('Error converting DOM to canvas:', err);
      }
    };

    // Initial conversion
    convertDomToCanvas();

    // Handle resize
    const debouncedResize = debounce(() => {
      convertDomToCanvas();
    }, 100);

    window.addEventListener('resize', debouncedResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [domEl]);

  return texture;
};

// Shaders
const vertexShader = `
  varying vec2 vUv;
  uniform vec2 uMouse;

  float circle(vec2 uv, vec2 circlePosition, float radius) {
    float dist = distance(circlePosition, uv);
    return 1.0 - smoothstep(0.0, radius, dist);
  }

  void main() {
    vUv = uv;
    vec3 newPosition = position;

    // Elevation based on mouse position
    vec2 mousePositions = uMouse * 0.5 + 0.5;
    float circleShape = circle(uv, mousePositions, 0.2);
    float intensity = 0.7;
    newPosition.z += circleShape * intensity;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  varying vec2 vUv;

  void main() {
    vec4 finalTexture = texture2D(uTexture, vUv);
    gl_FragColor = finalTexture;
  }
`;

// Main Scene component
const BulgeTextScene: React.FC = () => {
  const { viewport } = useThree();
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const domRef = useRef<HTMLDivElement>(null);

  // Get texture from DOM element
  const texture = useDomToCanvas(domRef.current);

  // Set up uniforms
  const uniforms = useRef({
    uTexture: { value: texture },
    uMouse: { value: new THREE.Vector2(0, 0) },
  });

  // Update texture when it changes
  useEffect(() => {
    if (texture && materialRef.current) {
      materialRef.current.uniforms['uTexture'].value = texture;
    }
  }, [texture]);

  // Update mouse position
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms['uMouse'].value = state.mouse;
    }
  });

  return (
    <>
      <Html zIndexRange={[-1, -10]} prepend fullscreen>
        <div
          ref={domRef}
          className="dom-element"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '5vw',
            fontWeight: 'bold',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            lineHeight: '1.2',
          }}
        >
          WHEN <br />
          WILL <br />
          WE <br />
          MEET?
          <br />
        </div>
      </Html>

      <mesh>
        <planeGeometry args={[viewport.width, viewport.height, 254, 254]} />
        <shaderMaterial
          ref={materialRef}
          uniforms={uniforms.current}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
        />
      </mesh>

      <pointLight position={[2, 4, 6]} intensity={5} distance={12} decay={1} />
    </>
  );
};

// Main component
const ThreeScene: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#1a1a1a']} />
        <BulgeTextScene />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
