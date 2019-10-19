import React from 'react';
import PropTypes from 'prop-types';

function Cue({ setRef, position }) {
  return (
    <mesh ref={setRef} position={position} castShadow>
      <cylinderGeometry attach='geometry' args={[0.1, 0.15, 12, 32, 32]} />
      <meshPhongMaterial attach='material' color={0xffffff} />
    </mesh>
  );
}

Cue.propTypes = {
  position: PropTypes.arrayOf(PropTypes.any)
};

Cue.defaultProps = {
  position: [0, 0, 0]
};

export default Cue;
