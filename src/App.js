
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
 
// } from "react-router-dom";



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
  if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor= '#042743';
  showAlert("Dark mode has been enabled", "success")
  document.title = 'Converter - Dark mode';
  // setInterval(() =>{
  //   document.title = 'converter is Amazing mode';

  // }, 2000);

  // setInterval(() =>{
  //   document.title = 'Converter is active now ';

  // }, 1500);
}

  else{
    setMode('light');
    document.body.style.backgroundColor= 'white';
    showAlert("Light mode has been enabled", "success")
    document.title = 'Converter - Light mode';
  }
}
  return (
    <>
{/* <Router> */}
<Navbar title="converter" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">  {/*it is a bootsrap class it takes it in center */}
{/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          
          {/* <Route exact path="/">     */}
           {/* if you do not use exect react use partical matching  */}
            <Textform showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode}/> 
          {/* </Route> */}
 {/* </Switch> */}
 

</div>
 {/* </Router>   */}

    </>
  );
}

export default App;
