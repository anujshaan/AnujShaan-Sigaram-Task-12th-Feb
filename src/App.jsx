import {useState} from 'react';

function App() {
  
  const handleClick =(e)=>{
    e.target.style.backgroundColor='red';
  }
  return (
    <div className="App">
      <div className="matrix-container">
        <div className="matrix" onClick={handleClick}></div>
        <div className="matrix" onClick={handleClick}></div>
        <div className="matrix" onClick={handleClick}></div>
        <div className="matrix" onClick={handleClick}></div>
        <div className="matrix" onClick={handleClick}></div>
        <div className="matrix" onClick={handleClick}></div>
        <div className="matrix" onClick={handleClick}></div>
        <div className="matrix" onClick={handleClick}></div>
        <div className="matrix" onClick={handleClick}></div>
        <div className="matrix" onClick={handleClick}></div>
        <div className="matrix" onClick={handleClick}></div>
        <div className="matrix" onClick={handleClick}></div>
        <div className="matrix" onClick={handleClick}></div>
        <div className="matrix" onClick={handleClick}></div>
        <div className="matrix" onClick={handleClick}></div>
        <div className="matrix" onClick={handleClick}></div>
      </div>
    </div>
  );
}

export default App;
