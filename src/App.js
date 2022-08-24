import logo from './load.svg';
import './App.css';
import React, { useState } from 'react';
import daysleft from 'daysleft';
import { usePopper } from 'react-popper';

const timeTillComplete = '05/31/2023';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
        <h1><span className="eGlowCharacter">U</span><span className="eGlowCharacter2">n</span><span className="eGlowCharacter">d</span><span className="eGlowCharacter2">e</span><span className="eGlowCharacter">r</span> <span className="eGlowCharacter2">C</span><span className="eGlowCharacter">o</span><span className="eGlowCharacter2">n</span><span className="eGlowCharacter">s</span><span className="eGlowCharacter2">t</span><span className="eGlowCharacter">r</span><span className="eGlowCharacter2">u</span><span className="eGlowCharacter">c</span><span className="eGlowCharacter2">t</span><span className="eGlowCharacter">i</span><span className="eGlowCharacter2">o</span><span className="eGlowCharacter">n</span></h1>
        <p>
          Please wait until my website is finished being made!<br/>
          Estimate of <code className="daysleft">{daysleft(timeTillComplete)}</code> days until the website is completed.
        </p>
      </header>
    </div>
  );
}

export default App;
