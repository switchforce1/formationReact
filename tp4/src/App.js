import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonIncDec from './ButtonIncDec';

function App() {
  return (
    <div className="App">
      <ButtonIncDec initVal={12}/>
    </div>
  );
}

export default App;
