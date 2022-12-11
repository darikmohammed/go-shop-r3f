import React from 'react';
import { useGLTF } from '@react-three/drei';

function Watch() {
  const model = useGLTF('./watch.glb');

  return <primitive object={model.scene} scale={80} />;
}

export default Watch;
