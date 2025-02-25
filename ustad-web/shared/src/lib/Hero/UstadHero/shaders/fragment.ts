export const fragmentShader = `
  uniform sampler2D uTexture;
  varying vec2 vUv;
  
  void main() {
    vec4 finalTexture = texture2D(uTexture, vUv);
    gl_FragColor = vec4(finalTexture);
  }
`;
