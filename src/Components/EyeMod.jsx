import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Eye({ mouse }) {
  const pupilRef = useRef();

  useFrame(() => {
    if (pupilRef.current) {
      // Constrain the pupil movement to stay within the iris
      const maxDistance = 0.2;
      pupilRef.current.position.x = Math.min(Math.max(mouse.x * maxDistance, -maxDistance), maxDistance);
      pupilRef.current.position.y = Math.min(Math.max(mouse.y * maxDistance, -maxDistance), maxDistance);
    }
  });

  return (
    <group rotation={[Math.PI, Math.PI, Math.PI]}> {/* Rotate 180 degrees around X-axis */}
      {/* Eye White */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
      {/* Iris */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      {/* Pupil */}
      <mesh ref={pupilRef} position={[0, 0, 0.2]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}

function EyeMod() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = - (event.clientY / window.innerHeight) * 2 + 1;
    setMouse({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 75,
        near: 0.1,
        far: 1000,
      }}
      style={{ height: '65vh', width: '50vw', color: 'black' }}
    >
      <ambientLight intensity={0.6} />

      
      <OrbitControls
        enablePan={true}
        enableZoom={false}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
      />
      
      <Eye mouse={mouse} />
    </Canvas>
  );
}

export default EyeMod;
