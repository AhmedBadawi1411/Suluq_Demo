precision mediump float;

uniform float u_time;  // Time variable for animation
uniform vec2 u_resolution;  // Resolution of the scene

void main(void) {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float x = uv.x * 10.0;
    float y = uv.y * 10.0;
    
    // Create a smooth, flowing aurora effect
    float color = 0.5 + 0.5 * sin(x + u_time) * sin(y + u_time);
    
    // Set the color output
    gl_FragColor = vec4(color, color * 0.5, color * 0.7, 1.0);
}