import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Line, Float } from '@react-three/drei';
import * as THREE from 'three';

const GridLines = () => {
  const points = [];
  const gridSize = 20;
  const step = 2;

  // Create grid lines
  for (let i = -gridSize; i <= gridSize; i += step) {
    // Horizontal lines
    points.push(new THREE.Vector3(-gridSize, 0, i));
    points.push(new THREE.Vector3(gridSize, 0, i));
    // Vertical lines
    points.push(new THREE.Vector3(i, 0, -gridSize));
    points.push(new THREE.Vector3(i, 0, gridSize));
  }

  return (
    <group>
      {points.map((point, index) => {
        if (index % 2 === 0 && index + 1 < points.length) {
          return (
            <Line
              key={index}
              points={[point, points[index + 1]]}
              color="#00ffff"
              lineWidth={1}
              transparent
              opacity={0.3}
            />
          );
        }
        return null;
      })}
    </group>
  );
};

const FloatingNodes = () => {
  const nodes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 20,
      Math.random() * 10,
      (Math.random() - 0.5) * 20
    ] as [number, number, number],
    color: ['#00ffff', '#9d00ff', '#00ff41'][Math.floor(Math.random() * 3)]
  }));

  return (
    <group>
      {nodes.map((node) => (
        <Float
          key={node.id}
          speed={1 + Math.random() * 2}
          rotationIntensity={1}
          floatIntensity={2}
          position={node.position}
        >
          <mesh>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color={node.color} transparent opacity={0.8} />
          </mesh>
          {/* Glow effect */}
          <mesh>
            <sphereGeometry args={[0.3, 8, 8]} />
            <meshBasicMaterial 
              color={node.color} 
              transparent 
              opacity={0.1}
              side={THREE.BackSide}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export const CyberGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#9d00ff" />
        
        <GridLines />
        <FloatingNodes />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};