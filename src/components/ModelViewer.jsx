import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BirdModel from "./models/BirdModel";

function ModelViewer() {
    return (
        <Canvas style={{ height: "60vh" }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <BirdModel />
            <OrbitControls
                minDistance={1.4}
                maxDistance={2}
                zoomSpeed={2}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 2}
            />
        </Canvas>
    );
}

export default ModelViewer;
