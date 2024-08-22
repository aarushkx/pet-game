import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { AnimationMixer } from "three";

function BirdModel() {
    const { scene: bird, animations } = useGLTF("/assets/models/bird.glb");

    const mixer = useRef();

    useEffect(() => {
        if (animations && animations.length) {
            mixer.current = new AnimationMixer(bird);
            animations.forEach((clip) => {
                mixer.current.clipAction(clip).play();
            });
        }
        return () => {
            if (mixer.current) {
                mixer.current.stopAllAction();
                mixer.current = null;
            }
        };
    }, [bird, animations]);

    useFrame((_, delta) => {
        if (mixer.current) {
            mixer.current.update(delta);
        }
    });

    return <primitive object={bird} scale={0.5} />;
}

export default BirdModel;
