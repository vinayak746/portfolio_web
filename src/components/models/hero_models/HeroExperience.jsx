import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense, useState, useEffect } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

// Loading component
const Loader = () => (
  <div className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
  </div>
);

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload assets after initial render
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) return <Loader />;

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={[1, 2]} // Limit pixel ratio for performance
      performance={{ min: 0.5 }} // Allow frame rate to drop for performance
      gl={{
        antialias: false, // Disable antialiasing for performance
        powerPreference: "high-performance",
        alpha: false,
      }}
    >
      <ambientLight intensity={0.2} color="#1a1a40" />
      
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        enableDamping
        dampingFactor={0.05}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={isTablet ? 30 : 50} />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
