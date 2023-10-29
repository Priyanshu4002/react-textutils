import React, { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar.jsx';
import TextArea from './components/TextArea.jsx';
//import About from './component/About';


function App() {
  //code for showing alert
  const [alert, setAlert] = useState(null)

  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout( ()=>{
      setAlert(null);
    },1500
    );
  }

 //code for enable dark mode
  const[mode,setMode]= useState("light")
  const toggleDark= ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#04061d";
      showAlert("Dark Mode has been Enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been Enabled","success");
    }
  }
  return (
    <>
    <Navbar title="Textutils" mode={mode} toggleDark={toggleDark}/>
    <Alert alert={alert} />
    <div className="container my-3">
    <TextArea heading="Enter the Text To Analyse" mode={mode} showAlert={showAlert}/>
    </div>
    {/* <div className="container ">    
      <About />
    </div>  */}
    </>
    
  );
}

export default App;
