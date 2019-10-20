import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { TextureLoader } from 'three';

function PoolBall({ setRef, position, textureURL }) {
  const ballTexture = useMemo(() => new TextureLoader().load(textureURL), [
    textureURL
  ]);

  return (
    <mesh ref={setRef} position={position} castShadow>
      <sphereGeometry attach='geometry' args={[0.5, 128, 128]} />
      <meshStandardMaterial
        attach='material'
        color={0xffffff}
        roughness={0.25}
        metalness={0}
        map={ballTexture}
      />
    </mesh>
  );
}

PoolBall.propTypes = {
  setRef: PropTypes.objectOf(PropTypes.any),
  position: PropTypes.arrayOf(PropTypes.number),
  textureURL: PropTypes.string
};

PoolBall.defaultProps = {
  setRef: {},
  position: [],
  textureURL: ''
};

export default PoolBall;
