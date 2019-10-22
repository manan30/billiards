import React, { useState } from 'react';

import { Canvas, CodeFAB } from './GlobalStyles';
import Modal from './components/Modal';
import Scene from './views/Scene';
import Controls from './components/Controls';

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
      <CodeFAB />
    </>
  );
}

export default App;
