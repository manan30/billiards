import React, { useRef } from 'react';
import { extend, useThree, useRender } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

function Controls(props) {
  const ref = useRef();
  const { camera, gl } = useThree();

  useRender(() => ref.current.update());

  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />;
}

export default Controls;
