import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor());

  return (
    <div className="App">
      <h1 style={{ color: color }}>React Random Color Generator</h1>
      <div style={{ backgroundColor: color }}>Generated Color: {color}</div>
      <div
        style={{
          backgroundColor: color,
          width: '100vw',
          height: '400px',
          display: 'flex',
          padding: '10px',
          marginLeft: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

      <br />
      <button onClick={() => setColor(randomColor())}>Generate</button>

      <br />
    </div>
  );
}

export default App;
