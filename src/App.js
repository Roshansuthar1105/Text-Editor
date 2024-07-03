import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
// import{BrowserRouter as Router, Switch , Route ,Link }from 'react-router-dom'
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode == "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#333";
      showAlert("Light mode", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "#fff";
      showAlert("Dark mode", "success");
    }
  };
  
  return (
    <>
      <Navbar logo="Text Editor" mode={mode} toggleMode={toggleMode} />
        
      <Alert alert={alert} />
      <div className="container">
        <Form
          showAlert={showAlert}
          heading="Enter Your Text Below"
          mode={mode}
        />
        {/* <About/> */}
      </div>
    </>
  );
}
export default App;