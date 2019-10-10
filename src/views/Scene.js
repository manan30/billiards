import React, { useRef } from 'react';
import { useThree } from 'react-three-fiber';
import * as THREE from 'three';

import Floor from '../components/Floor';
import AmbientLight from '../components/Lights/AmbientLight';
import PoolBall from '../components/PoolBall';
import Cube from '../components/Cube';
// import PoolTable from '../components/PoolTable';

function Scene() {
  const floorRef = useRef();
  const lightRef = useRef();
  const poolBallRef = useRef();

  const { camera, scene, gl } = useThree();

  gl.setSize(window.innerWidth, window.innerHeight);
  gl.shadowMap.enabled = true;
  gl.antialias = true;
  gl.physicallyCorrectLights = true;
  gl.gammaInput = true;
  gl.gammaOutput = true;

  camera.fov = 23;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 100;

  camera.position.set(-5, 7, 5);

  const cameraHelper = new THREE.CameraHelper(camera);
  scene.add(cameraHelper);

  return (
    <>
      <AmbientLight setRef={lightRef} color={0xffffff} intensity={2} />
      <Floor setRef={floorRef} />
      <PoolBall setRef={poolBallRef} position={[0, 0.1, 0]} />
      <PoolBall setRef={poolBallRef} position={[0.1, 0.1, 0.2]} />
      <PoolBall setRef={poolBallRef} position={[-0.1, 0.1, 0.2]} />
      <PoolBall setRef={poolBallRef} position={[0.2, 0.1, 0.4]} />
      <PoolBall setRef={poolBallRef} position={[-0.2, 0.1, 0.4]} />
      <PoolBall setRef={poolBallRef} position={[0, 0.1, 0.4]} />
      <PoolBall setRef={poolBallRef} position={[0.3, 0.1, 0.6]} />
      <PoolBall setRef={poolBallRef} position={[0.1, 0.1, 0.6]} />
      <PoolBall setRef={poolBallRef} position={[-0.1, 0.1, 0.6]} />
      <PoolBall setRef={poolBallRef} position={[-0.3, 0.1, 0.6]} />
      <PoolBall setRef={poolBallRef} position={[0.4, 0.1, 0.8]} />
      <PoolBall setRef={poolBallRef} position={[0.2, 0.1, 0.8]} />
      <PoolBall setRef={poolBallRef} position={[0, 0.1, 0.8]} />
      <PoolBall setRef={poolBallRef} position={[-0.2, 0.1, 0.8]} />
      <PoolBall setRef={poolBallRef} position={[-0.4, 0.1, 0.8]} />
      {/* <PoolTable /> */}
    </>
  );
}

export default Scene;
