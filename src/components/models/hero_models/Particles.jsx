import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 50 }) => {
  const mesh = useRef();
  const particleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 8;
    canvas.height = 8;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(4, 4, 0, 4, 4, 4);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 8, 8);
    return new THREE.CanvasTexture(canvas);
  }, []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 8,
          Math.random() * 8 + 4,
          (Math.random() - 0.5) * 8,
        ],
        speed: 0.003 + Math.random() * 0.001,
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    const positions = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      const idx = i * 3 + 1;
      positions[idx] -= particles[i].speed;
      if (positions[idx] < -2) positions[idx] = Math.random() * 8 + 4;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  const positions = new Float32Array(count * 3);
  particles.forEach((p, i) => {
    positions[i * 3] = p.position[0];
    positions[i * 3 + 1] = p.position[1];
    positions[i * 3 + 2] = p.position[2];
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={particleTexture}
        color="#ffffff"
        size={0.15}
        transparent
        opacity={0.5}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
};

export default Particles;
