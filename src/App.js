import React, { useState } from 'react';

import { Canvas, CodeFAB } from './GlobalStyles';
import Modal from './components/Modal';
import Scene from './views/Scene';
import Controls from './components/Controls';
import Button from './components/Button';

import Icon from './svg/ic_code.svg';

function App() {
  const [modal, setModal] = useState(true);
  const [coeff, setCoeff] = useState(0.01);
  return (
    <>
      {modal && (
        <Modal
          handler={() => {
            setModal(!modal);
          }}
        />
      )}
      <Button handler={() => setCoeff(0.01)} text='Normal'>
        Normal
      </Button>
      <Button
        top='128px'
        handler={() => setCoeff(0.03)}
        text='Heavy Friction'
      />
      <Button
        top='192px'
        handler={() => setCoeff(0.001)}
        text='Heavy Restitution'
      />
      <Canvas>
        <Scene coeff={coeff} />
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
