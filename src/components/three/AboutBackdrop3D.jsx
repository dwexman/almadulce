import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function SoftParticles() {
  const ref = useRef();

  const positions = useMemo(() => {
    const count = 1800;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }
    return arr;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!ref.current) return;

    const mx = state.pointer.x;
    const my = state.pointer.y;

    ref.current.rotation.y = t * 0.08 + mx * 0.35;
    ref.current.rotation.x = Math.sin(t * 0.25) * 0.12 + my * 0.25;
    ref.current.position.x = mx * 0.35;
    ref.current.position.y = Math.sin(t * 0.35) * 0.12 + my * 0.25;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#A855F7"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.75}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function AboutBackdrop3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        style={{ width: "100%", height: "100%" }}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.75]}
      >
        <ambientLight intensity={1.2} />
        <SoftParticles />
      </Canvas>
    </div>
  );
}
