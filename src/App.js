import React from 'react';
import Board from './Board';
import './App.css';

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className='App'>
      <h1>Lights Out!</h1>
      <Board nrows={2} ncols={2} chanceLightStartsOn={0.25} />
    </div>
  );
}

export default App;
