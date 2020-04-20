varying vec3 vUv;

void main() {
  uniform vec3 colorA;
  uniform vec3 colorB;

  gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);

}
