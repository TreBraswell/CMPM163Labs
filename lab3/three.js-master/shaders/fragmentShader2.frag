varying vec3 vUv;
uniform vec3 colorA;
uniform vec3 colorB;
uniform vec2 divider = new vec2(.5,.5);
void main() {
  

 gl_FragColor = vec4(vUv/divider, 1.0);

}





