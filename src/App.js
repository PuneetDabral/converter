
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light') ; //wheather drak mode is enable or not 
  const [alert, setalert] = useState(null);
  const showAlert = (message, type)=>{
     setalert({
       msg: message,
       type: type
     })
     setTimeout(() => {
       setalert(null);
     }, 1500);

  }




 const toggleMode = ()=>{
  if(mode == 'light'){
  setMode('dark');
  document.body.style.backgroundColor= '#042743';
  showAlert("Dark mode has been enabled", "success")
  }

  else{
    setMode('light');
    document.body.style.backgroundColor= 'white';
    showAlert("Light mode has been enabled", "success")
  }
}
  return (
    <>
    
<Navbar title="converter" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">  {/*it is a bootsrap class it takes it in center */}
 <Textform showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode}/> 
{/* <About/> */}

</div>

    </>
  );
}

export default App;
