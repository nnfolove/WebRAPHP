import React from 'react';
import Home from './Home/Home'
import './App.css';

function App() {
  return (
    <div className='Container'>
      <Home style={{position: 'absolute', top: '50%'}}></Home>
    </div>
  );
}

export default App;
