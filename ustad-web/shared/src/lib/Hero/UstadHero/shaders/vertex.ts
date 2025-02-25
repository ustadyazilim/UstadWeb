export const vertexShader = `
  uniform vec2 uMouse;
  
  varying vec2 vUv;
  
  float circle(vec2 uv, vec2 circlePosition, float radius) {
    float dist = distance(circlePosition, uv);
    return 1. - smoothstep(0.0, radius, dist);
  }
  
  void main() {
    vec3 newPosition = position;
    vUv = uv;
  
    // Elevation
    vec2 mousePositions = uMouse * 0.5 + 0.5;
    float circleShape = circle(uv, mousePositions, 0.2);
    float intensity = 0.7;
    newPosition.z += circleShape * intensity;
  
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;
