import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';

const Laptop = () => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.013;
    }
  });

  const screenTexture = useLoader(TextureLoader, '/code1.png');
  const keyboardTexture = useLoader(TextureLoader, '/macbook-Keyboard.jpeg');
  const back = useLoader(TextureLoader, '/appleBack.jpeg');

  return (
    <group ref={groupRef} scale={[1.4, 1.4, 1.4]}>
      {/* Laptop base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.06, 1.5]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>
      {/*keyboard */}
      <mesh position={[0, 0.051, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 1.5]} />
        <meshBasicMaterial map={keyboardTexture} />
      </mesh>
      {/* Laptop back */}
      <mesh position={[0, 0.75, -0.783]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[2, 1.5]} />
        <meshBasicMaterial map={back} />
      </mesh>

      {/* Laptop screen */}
      <mesh position={[0, 0.75, -0.75]}>
        <boxGeometry args={[2, 1.5, 0.04]} />
        <meshStandardMaterial attach="material" color="#cccccc" />
      </mesh>

      {/* Screen front */}
      <mesh position={[0, 0.75, -0.729975]}>
        <planeGeometry args={[2, 1.5]} />
        <meshBasicMaterial map={screenTexture} />
      </mesh>
    </group>
  );
};

const LaptopFiberScene = () => {
  return (
    <Canvas 
      camera={{
        position: [0, 2.5, 5],
        fov: 75,
        near: 0.1,
        far: 1000,
      }}
      style={{ height: '65vh', width: '50vw', color: 'black' }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} />
      
      <OrbitControls
        enablePan={true}
        enableZoom={false}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
      />
      
      <Laptop />
    </Canvas>
  );
};

export default LaptopFiberScene;
