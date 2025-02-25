declare module 'three';
declare module '@react-three/fiber' {
  import { Object3DNode } from '@react-three/fiber';
  import { ShaderMaterial } from 'three';
  
  interface ThreeElements {
    shaderMaterial: Object3DNode<ShaderMaterial, typeof ShaderMaterial>;
  }
}
declare module '@react-three/drei';
declare module 'three-custom-shader-material';
