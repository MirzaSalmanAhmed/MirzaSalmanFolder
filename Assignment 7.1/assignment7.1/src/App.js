import logo from './logo.svg';
import './App.css';
import Profilex from './Profilex'
import CurrentDateTime from './CurrentDateTime'
import Image from './Image'
import React from 'react';

function App() {
  return (
    
    <>
    <h2>Assignment 7.1 by Midhat and Mirza Salman</h2>
    <h3>The Profile component is: </h3>
    <Profilex name="Mirza Salman" gender="Male"/>
    <Profilex name="Midhat" gender="Female"/>  
    <br/>  
    <h3>The CurrentDateTime component is: </h3>
    <CurrentDateTime/>
    <br/>
    <h3>The Image component is: </h3>
    <Image/>

</>  
    

  );
}

export default App;
