import React, { Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useCubeTexture, Preload } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const SkyBox = () => {
  // Load cube texture
  const texture = useCubeTexture(
    ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
    { path: "/" }
  );

  // Set the scene background
  const { scene } = useThree();
  scene.background = texture;

  return null;
};

const ReflectiveSphere = () => {
  const { scene, gl } = useThree();

  // Create a cube render target for reflection
  const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
    format: THREE.RGBFormat,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
  });

  const cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 0, 0);
  scene.add(cubeCamera);

  // Update the cube camera on every frame
  useFrame(() => cubeCamera.update(gl, scene));

  return (
    <mesh visible position={[5, 0, 0]} castShadow>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial
        envMap={cubeCamera.renderTarget.texture}
        color="white"
        roughness={0.1}
        metalness={1}
      />
    </mesh>
  );
};

const CombinedCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, 3, 15], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <SkyBox />
        <ReflectiveSphere />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CombinedCanvas;
