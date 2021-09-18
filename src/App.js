
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'



function App() {
  const [mode, setMode] = useState('light') ; //wheather drak mode is enable or not 
 const toggleMode = ()=>{
  if(mode == 'light'){
  setMode('dark');
  document.body.style.backgroundColor= '#042743';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor= 'white';
  }
}
  return (
    <>
    
<Navbar title="converter" mode={mode} toggleMode={toggleMode} />
<div className="container my-3">  {/*it is a bootsrap class it takes it in center */}
 <Textform  heading="Enter the Text to analyze below" mode={mode}/> 
{/* <About/> */}

</div>

    </>
  );
}

export default App;
