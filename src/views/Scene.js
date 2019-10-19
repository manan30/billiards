import React, { useRef } from 'react';
import { useThree } from 'react-three-fiber';
// import * as THREE from 'three';

import Floor from '../components/Floor';
import AmbientLight from '../components/Lights/AmbientLight';
// import PoolTable from '../components/PoolTable';

function Scene() {
  const floorRef = useRef();
  const lightRef = useRef();

  const { camera, scene, gl } = useThree();

  gl.setSize(window.innerWidth, window.innerHeight);
  gl.shadowMap.enabled = true;
  gl.antialias = true;
  gl.physicallyCorrectLights = true;
  gl.gammaInput = true;
  gl.gammaOutput = true;

  camera.fov = 45;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 1000;

  camera.up.set(0, 0, 1);
  camera.position.set(-5, 7, 5);

  // const cameraHelper = new THREE.CameraHelper(camera);
  // scene.add(cameraHelper);

  return (
    <>
      <AmbientLight setRef={lightRef} color={0xffffff} intensity={2} />
      <Floor setRef={floorRef} />
      {/* <PoolTable /> */}
    </>
  );
}

export default Scene;
