"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const money = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

export function RevenueDial() {
  const [covers, setCovers] = useState(18);
  const [spend, setSpend] = useState(34);
  const [services, setServices] = useState(4);
  const opportunity = useMemo(() => covers * spend * services, [covers, spend, services]);

  return (
    <div className="revenue-dial">
      <div className="dial-heading">
        <span>Capacity check</span>
        <strong>{money.format(opportunity)}<small>/month</small></strong>
        <p>Illustrative value of filling this gap. It is a capacity model, not a forecast.</p>
      </div>
      <label>
        <span>Empty covers in the target service <b>{covers}</b></span>
        <input type="range" min="4" max="80" value={covers} onChange={(e) => setCovers(Number(e.target.value))} />
      </label>
      <label>
        <span>Average guest spend <b>{money.format(spend)}</b></span>
        <input type="range" min="12" max="120" value={spend} onChange={(e) => setSpend(Number(e.target.value))} />
      </label>
      <label>
        <span>Target services per month <b>{services}</b></span>
        <input type="range" min="1" max="20" value={services} onChange={(e) => setServices(Number(e.target.value))} />
      </label>
    </div>
  );
}

const vertexShader = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;
  varying vec2 v_uv;
  uniform vec2 u_resolution;
  uniform vec2 u_pointer;
  uniform float u_time;

  float field(vec2 p) {
    float a = sin(p.x * 8.0 + u_time * 0.36);
    float b = sin((p.x + p.y) * 6.0 - u_time * 0.28);
    float c = cos(p.y * 9.0 + u_time * 0.22);
    return (a + b + c) / 3.0;
  }

  void main() {
    vec2 uv = v_uv;
    vec2 aspect = vec2(u_resolution.x / max(u_resolution.y, 1.0), 1.0);
    vec2 p = (uv - 0.5) * aspect;
    vec2 pointer = (u_pointer - 0.5) * aspect;
    float pull = 0.12 / (0.12 + distance(p, pointer));
    p += normalize(p - pointer + 0.001) * pull * 0.12;
    float f = field(p * 1.15);
    float bands = smoothstep(0.02, 0.0, abs(fract((f + 1.0) * 5.5) - 0.5) - 0.035);
    float glow = smoothstep(0.72, -0.28, distance(p, pointer));
    vec3 ink = vec3(0.055, 0.052, 0.045);
    vec3 ember = vec3(1.0, 0.20, 0.08);
    vec3 cream = vec3(0.95, 0.91, 0.82);
    vec3 colour = mix(ink, ember, smoothstep(-0.45, 0.7, f) * 0.82);
    colour = mix(colour, cream, bands * (0.28 + glow * 0.28));
    float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
    colour += (grain - 0.5) * 0.035;
    gl_FragColor = vec4(colour, 1.0);
  }
`;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function WebGLPulse() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) {
      canvas.dataset.fallback = "true";
      return;
    }

    const vertex = compile(gl, gl.VERTEX_SHADER, vertexShader);
    const fragment = compile(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolution = gl.getUniformLocation(program, "u_resolution");
    const pointerUniform = gl.getUniformLocation(program, "u_pointer");
    const time = gl.getUniformLocation(program, "u_time");
    const pointer = { x: 0.68, y: 0.42 };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let visible = true;

    const render = (stamp: number) => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.floor(canvas.clientWidth * ratio));
      const height = Math.max(1, Math.floor(canvas.clientHeight * ratio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform2f(pointerUniform, pointer.x, pointer.y);
      gl.uniform1f(time, reduced ? 1.2 : stamp * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      if (!reduced && visible) frame = requestAnimationFrame(render);
    };

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width;
      pointer.y = 1 - (event.clientY - rect.top) / rect.height;
    };
    canvas.addEventListener("pointermove", onPointer, { passive: true });

    const observer = new IntersectionObserver(([entry]) => {
      const nextVisible = entry.isIntersecting;
      if (nextVisible && !visible && !reduced) frame = requestAnimationFrame(render);
      visible = nextVisible;
      if (!visible) cancelAnimationFrame(frame);
    });
    observer.observe(canvas);
    render(0);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener("pointermove", onPointer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return <canvas ref={canvasRef} className="webgl-pulse" aria-hidden="true" />;
}
