import React from 'react';
import './index.scss';
import { useState } from 'react';

function App() {
  const [count, setCount] = React.useState(0) // указываем начальное значение 0
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count- 1)} className="minus">- Минус</button>
        <button onClick={()=> setCount(count+1)} className="plus">Плюс +</button>
        <button onClick={()=> setCount(0)} className="minus">Сброс</button>
      </div>
    </div>
  );
}

export default App;
