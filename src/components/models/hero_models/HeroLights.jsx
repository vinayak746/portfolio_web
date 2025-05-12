import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* Main key light */}
    <spotLight
      position={[2, 5, 6]}
      angle={0.25}
      penumbra={0.5}
      intensity={40}
      color="white"
      castShadow={false}
      distance={20}
      decay={2}
    />
    {/* Ambient fill light */}
    <hemisphereLight
      intensity={0.4}
      color="#4cc9f0"
      groundColor="#9d4edd"
    />
    {/* Accent light */}
    <pointLight 
      position={[1, 2, -2]} 
      intensity={3} 
      color="#0d00a4"
      distance={8}
      decay={2}
    />
  </>
);

export default HeroLights;
