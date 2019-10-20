import React, { useMemo } from 'react';
import Proptypes from 'prop-types';
import * as THREE from 'three';

import floorTexture from '../assets/textures/hardwood2_diffuse.jpg';
import floorBumpTexture from '../assets/textures/hardwood2_bump.jpg';
import floorRoughnessTexture from '../assets/textures/hardwood2_roughness.jpg';

function Floor({ setRef }) {
  const texture = useMemo(
    () => new THREE.TextureLoader().load(floorTexture),
    []
  );

  const bumpTexture = useMemo(
    () => new THREE.TextureLoader().load(floorBumpTexture),
    []
  );

  const roughnessTexture = useMemo(
    () => new THREE.TextureLoader().load(floorRoughnessTexture),
    []
  );

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 4;
  texture.repeat.set(10, 24);

  bumpTexture.wrapS = THREE.RepeatWrapping;
  bumpTexture.wrapT = THREE.RepeatWrapping;
  bumpTexture.anisotropy = 4;
  bumpTexture.repeat.set(10, 24);

  roughnessTexture.wrapS = THREE.RepeatWrapping;
  roughnessTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.anisotropy = 4;
  roughnessTexture.repeat.set(10, 24);

  return (
    <mesh ref={setRef} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeBufferGeometry attach='geometry' args={[20, 20]} />
      <meshStandardMaterial
        attach='material'
        color={0xffffff}
        map={texture}
        bumpMap={bumpTexture}
        roughnessMap={roughnessTexture}
        roughness={0.8}
        metalness={0.2}
        bumpScale={0.0005}
        side={THREE.DoubleSide}
        needsUpdate
      />
    </mesh>
  );
}

Floor.propTypes = { setRef: Proptypes.objectOf(Proptypes.any) };

Floor.defaultProps = { setRef: {} };

export default Floor;
