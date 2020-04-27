uniform sampler2D texture1;
varying vec2 vUv;

void main() {
	// sample from the texture based on the uv coordinates
vec2 diff = vec2(vUv.x/.5,vUv.y/.5);
if(vUv.x>.5 &&vUv.y<.5)
{
	gl_FragColor = texture2D(texture1,vec2(vUv.x/.5-1.0,vUv.y/.5 ));
}
else if(vUv.x<.5 &&vUv.y>.5)
{
	gl_FragColor = texture2D(texture1,vec2(vUv.x/.5,vUv.y/.5-1.0 ));
}
else if(vUv.x>.5 &&vUv.y>.5)
{
	gl_FragColor = texture2D(texture1,vec2(vUv.x/.5-1.0,vUv.y/.5-1.0 ));
}
else
{
	gl_FragColor = texture2D(texture1,vec2(vUv.x/.5,vUv.y/.5 ));
}
	

}
