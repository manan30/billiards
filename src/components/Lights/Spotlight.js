import React from 'react';
import Proptypes from 'prop-types';
import { useThree } from 'react-three-fiber';
import * as THREE from 'three';

function Spotlight({ setRef, color, position, intensity }) {
  const { scene } = useThree();

  const shadowCameraHelper =
    setRef.current && new THREE.CameraHelper(setRef.current.shadow.camera);
  if (shadowCameraHelper) scene.add(shadowCameraHelper);

  return (
    <spotLight
      ref={setRef}
      attach='light'
      color={color}
      position={position}
      intensity={intensity}
      castShadow
    />
  );
}

Spotlight.propTypes = {
  setRef: Proptypes.objectOf(Proptypes.any),
  color: Proptypes.number,
  position: Proptypes.arrayOf(Proptypes.number),
  intensity: Proptypes.number
};

Spotlight.defaultProps = {
  setRef: {},
  color: 0,
  position: [],
  intensity: 1
};

export default Spotlight;
