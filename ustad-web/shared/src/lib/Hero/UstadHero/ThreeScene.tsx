'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Canvas as R3FCanvas } from '@react-three/fiber/dist/declarations/src/native';

// Dynamically import Scene component
const Scene = dynamic(() => import('./Scene'), { ssr: false });

// Dynamically import Canvas with proper typing
const Canvas = dynamic(() => Promise.resolve(R3FCanvas), {
  ssr: false,
  loading: () => null,
});

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
