import React, { useRef } from 'react';
import { useThree } from 'react-three-fiber';

import Light from '../components/Light';
import PoolTable from '../components/PoolTable';

import Constants from '../utils/Constants';
import Cue from '../components/Cue';

function Scene() {
  const cueRef = useRef();

  const { camera, gl } = useThree();

  gl.setClearColor(0x151515, 1);
  gl.shadowMap.enabled = false;

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
      {Constants.pointLightPositions.map((pos, i) => {
        const idx = i;
        return (
          <Light
            key={idx}
            type='PointLight'
            color={0xffffff}
            intensity={0.4}
            distance={100}
            position={pos}
            castShadow
          />
        );
      })}
      <Light
        type='AmbientLight'
        color={0xffffff}
        intensity={0.2}
        position={[0, 0, 0]}
      />
      <PoolTable />
      <Cue setRef={cueRef} position={[0, 0, 0]} />
    </>
  );
}

export default Scene;
