import React, { useState } from 'react';

import { Canvas, CodeFAB } from './GlobalStyles';
import Modal from './components/Modal';
import Scene from './views/Scene';
import Controls from './components/Controls';

import Icon from './svg/ic_code.svg';

function App() {
  const [modal, setModal] = useState(true);
  return (
    <>
      {modal && (
        <Modal
          handler={() => {
            setModal(!modal);
          }}
        />
      )}
      <Canvas>
        <Scene />
        <Controls
          enableRotate
          enablePan={false}
          maxDistance={100}
          minDistance={5}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <a
        href='https://github.com/manan30/billiards'
        target='_blank'
        rel='noopener noreferrer'>
        <CodeFAB src={Icon} />
      </a>
    </>
  );
}

export default App;
