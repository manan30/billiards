import React from 'react';

import { Canvas, CodeFAB } from './GlobalStyles';
import Scene from './views/Scene';
import Controls from './components/Controls';

function App() {
  return (
    <>
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
