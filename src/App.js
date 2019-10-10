import React from 'react';

import { Canvas, CodeFAB } from './GlobalStyles';
import Scene from './views/Scene';
import Controls from './components/Controls';

function App() {
  return (
    <>
      <Canvas>
        <Scene />
        <Controls />
      </Canvas>
      <CodeFAB />
    </>
  );
}

export default App;
