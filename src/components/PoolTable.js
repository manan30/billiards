import React, { useMemo } from 'react';
import {
  TextureLoader,
  RepeatWrapping,
  Shape,
  ExtrudeGeometry,
  BoxGeometry,
  MeshStandardMaterial,
  CylinderGeometry,
  MeshBasicMaterial
} from 'three';

import playAreaTextureURL from '../assets/textures/cloth.jpg';
import edgeTextureUrl from '../assets/textures/hardwood_floor.jpg';

function PoolTable() {
  const pocketPositions = [
    [-12, 24, 0],
    [12, 24, 0],
    [-12.5, 0, 0],
    [12.5, 0, 0],
    [-12, -24, 0],
    [12, -24, 0]
  ];

  const edgeSidePositions = [
    [-12.5, 12, 0.7],
    [12.5, 12, 0.7],
    [-12.5, -12, 0.7],
    [12.5, -12, 0.7]
  ];

  const edgeTopPositions = [[0, 24.5, 0.7], [0, -24.5, 0.7]];

  const clothSidePositions = [
    [-12, 1, 0.2],
    [12, 1, 1.2],
    [-12, -23, 0.2],
    [12, -23, 1.2]
  ];

  const clothTopPositions = [[-11, 24, 0.2], [11, -24, 0.2]];

  const playAreaTexture = useMemo(
    () => new TextureLoader().load(playAreaTextureURL),
    []
  );

  playAreaTexture.wrapS = RepeatWrapping;
  playAreaTexture.wrapT = RepeatWrapping;
  playAreaTexture.offset.set(0, 0);
  playAreaTexture.repeat.set(3, 6);

  const playAreaMaterial = new MeshStandardMaterial({
    map: playAreaTexture,
    color: 0x42a8ff,
    roughness: 0.4,
    metalness: 0,
    bumpScale: 1
  });

  const edgesTexture = useMemo(
    () => new TextureLoader().load(edgeTextureUrl),
    []
  );

  const edgeSideGeometry = new BoxGeometry(1, 22, 1);
  const edgeTopGeometry = new BoxGeometry(22, 1, 1);
  const edgeMaterial = new MeshStandardMaterial({ map: edgesTexture });

  const shape = new Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0, 22);
  shape.lineTo(0.5, 21.2);
  shape.lineTo(0.5, 0.8);
  shape.lineTo(0, 0);

  const extrudeSettings = { steps: 1, depth: 1, bevelEnabled: false };

  const clothSideGeometry = new ExtrudeGeometry(shape, extrudeSettings);

  const pocketGeometry = new CylinderGeometry(1, 1, 1.4, 20);
  const pocketMaterial = new MeshBasicMaterial({ color: 0x000000 });

  return (
    <object3D position={[0, 0, -1]}>
      <mesh receiveShadow>
        <boxGeometry attach='geometry' args={[24, 48, 1]} />
        <meshStandardMaterial
          attach='material'
          color={0x42a8ff}
          roughness={0.4}
          metalness={0}
          bumpScale={1}
          map={playAreaTexture}
        />
      </mesh>
      {edgeSidePositions.map((pos, i) => {
        const idx = i;
        return (
          <mesh
            key={idx}
            args={[edgeSideGeometry, edgeMaterial]}
            position={pos}
          />
        );
      })}
      {edgeTopPositions.map((pos, i) => {
        const idx = i;
        return (
          <mesh
            key={idx}
            args={[edgeTopGeometry, edgeMaterial]}
            position={pos}
          />
        );
      })}
      {clothSidePositions.map((pos, i) => {
        const idx = i;
        return (
          <mesh
            key={idx}
            args={[clothSideGeometry, playAreaMaterial]}
            position={pos}
            rotation={
              idx === 1 || idx === 3 ? [0, (180 * Math.PI) / 180, 0] : [0, 0, 0]
            }
          />
        );
      })}
      {clothTopPositions.map((pos, i) => {
        const idx = i;
        return (
          <mesh
            key={idx}
            args={[clothSideGeometry, playAreaMaterial]}
            position={pos}
            rotation={
              idx === 0
                ? [0, 0, (-90 * Math.PI) / 180, 0]
                : [0, 0, (90 * Math.PI) / 180, 0]
            }
          />
        );
      })}
      {pocketPositions.map((pos, i) => {
        const idx = i;
        return (
          <mesh
            key={idx}
            args={[pocketGeometry, pocketMaterial]}
            position={pos}
            rotation={[1.5708, 0, 0]}
          />
        );
      })}
    </object3D>
  );
}

export default PoolTable;
