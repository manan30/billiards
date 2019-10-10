import React from 'react';
import Proptypes from 'prop-types';
import { useThree } from 'react-three-fiber';
import * as THREE from 'three';

function AmbientLight({ setRef, color, position, intensity }) {
  // const { scene } = useThree();

  // const shadowCameraHelper =
  //   setRef.current && new THREE.CameraHelper(setRef.current.shadow.camera);
  // if (shadowCameraHelper) scene.add(shadowCameraHelper);

  console.log(setRef);

  return (
    <ambientLight
      ref={setRef}
      attach='light'
      color={color}
      position={position}
      intensity={intensity}
    />
  );
}

AmbientLight.propTypes = {
  setRef: Proptypes.objectOf(Proptypes.any),
  color: Proptypes.number,
  position: Proptypes.arrayOf(Proptypes.number),
  intensity: Proptypes.number
};

AmbientLight.defaultProps = {
  setRef: {},
  color: 0,
  position: [],
  intensity: 1
};

export default AmbientLight;
