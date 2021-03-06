// File generated with src/effects/buildEffects.py. Do not edit //

J3D.EffectSource = {};

J3D.EffectSource.CommonInclude = [
	"#ifdef GL_ES",
	"precision highp float;",
	"#endif",

	"uniform float uTime;",
""].join("\n");

J3D.EffectSource.DefaultVertex = [
	"attribute vec2 aVertexPosition;",
	"attribute vec2 aTextureCoord;",

	"varying vec2 vTextureCoord;",

	"void main(void) {",
	"gl_Position = vec4(aVertexPosition, 0.0, 1.0);",
	"vTextureCoord = aTextureCoord;",
	"}",

""].join("\n");

J3D.EffectSource.VignetteEffect = [
	"uniform sampler2D uTexture;",
	"varying vec2 vTextureCoord;",

	"void main(void) {",
	"vec2 m = vec2(0.5, 0.5);",
	"float d = distance(m, vTextureCoord) * 1.0;",
	"gl_FragColor = texture2D(uTexture, vTextureCoord) * (1.0 - d * d);",
	"}",
""].join("\n");

