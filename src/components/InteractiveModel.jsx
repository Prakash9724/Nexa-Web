import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial, Float } from '@react-three/drei';

const WebDevModel = () => {
  const groupRef = useRef();
  const floatingGroupRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate the entire scene slowly
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
    
    // Additional floating animation for elements
    if (floatingGroupRef.current) {
      floatingGroupRef.current.position.y = Math.sin(time) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central floating elements */}
      <group ref={floatingGroupRef}>
        {/* Laptop - representing web development */}
        <group position={[0, 0, 0]}>
          {/* Laptop base */}
          <mesh position={[0, -0.1, 0]} rotation={[0.1, 0, 0]}>
            <boxGeometry args={[3, 0.2, 2]} />
            <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
          </mesh>
          
          {/* Laptop screen */}
          <mesh position={[0, 1, -0.5]} rotation={[1.4, 0, 0]}>
            <boxGeometry args={[3, 0.1, 2]} />
            <meshStandardMaterial color="#222" metalness={0.5} roughness={0.2} />
            
            {/* Screen content - code */}
            <mesh position={[0, 0.06, 0]}>
              <planeGeometry args={[2.8, 1.8]} />
              <meshBasicMaterial color="#1E1E3F" />
              
              {/* Code lines - reduced number */}
              {Array.from({ length: 5 }).map((_, i) => (
                <mesh key={i} position={[-1.2, 0.7 - i * 0.3, 0.01]}>
                  <planeGeometry args={[2.2, 0.08]} />
                  <meshBasicMaterial 
                    color={i % 3 === 0 ? "#FF9D00" : i % 3 === 1 ? "#FF628C" : "#A5FF90"} 
                    transparent
                    opacity={0.8}
                  />
                </mesh>
              ))}
            </mesh>
          </mesh>
        </group>
      </group>
      
      {/* Orbiting technology icons - reduced number */}
      <group>
        {/* HTML Icon */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={[3, 1, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#E44D26" />
          </mesh>
        </Float>
        
        {/* CSS Icon */}
        <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
          <mesh position={[-3, 1.5, 1]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#264DE4" />
          </mesh>
        </Float>
        
        {/* JS Icon */}
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.7}>
          <mesh position={[2, -1.5, -2]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#F7DF1E" />
          </mesh>
        </Float>
        
        {/* React Icon */}
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
          <group position={[-2, -1, -1]}>
            {/* React logo - simplified */}
            <mesh rotation={[Math.PI/2, 0, 0]}>
              <torusGeometry args={[1, 0.1, 16, 32]} />
              <meshStandardMaterial color="#61DAFB" />
            </mesh>
            
            <mesh>
              <sphereGeometry args={[0.3, 32, 32]} />
              <meshStandardMaterial color="#61DAFB" />
            </mesh>
          </group>
        </Float>
      </group>
      
      {/* Particle system - reduced number */}
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh 
          key={i} 
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial 
            color={
              i % 3 === 0 ? "#6366F1" : 
              i % 3 === 1 ? "#F472B6" : 
              "#22D3EE"
            } 
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
};

export default WebDevModel; 