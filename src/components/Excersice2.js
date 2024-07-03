import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
function App1() {
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
  const [mode1, setMode1] = useState("default");
  const toggleMode1 = () => {
    if (mode1 === "default") {
      setMode1("purple");
      setMode2("default");
      setMode3("default");
      document.body.style.backgroundColor = "#3e0d3e";
      document.body.style.color = "#fff";
      showAlert("Purple mode", "success");
    }
    if (mode1 == "purple") {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#333";
      showAlert("Light mode", "success");
      setMode1("default");
    }
  };
  const [mode2, setMode2] = useState("default");
  const toggleMode2 = () => {
    if (mode2 === "default") {
      setMode2("red");
      setMode1("default");
      setMode3("default");
      document.body.style.backgroundColor = "#900";
      document.body.style.color = "#fff";
      showAlert("Red mode", "success");
    }
    if (mode2 === "red") {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#333";
      showAlert("Light mode", "success");
      setMode2("default");
    }
  };
  const [mode3, setMode3] = useState("default");
  const toggleMode3 = () => {
    if (mode3 == "blue") {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#333";
      showAlert("Light mode", "success");
      setMode3("default");
    }
    if (mode3 == "default") {
      setMode3("blue");
      setMode1("default");
      setMode2("default");
      document.body.style.backgroundColor = "#009";
      document.body.style.color = "#fff";
      showAlert("Blue mode", "success");
    }
  };

  return (
    <>
      <Navbar logo="BitWise Learning" mode={mode} toggleMode={toggleMode} />
        <About
          toggleMode1={toggleMode1}
          toggleMode2={toggleMode2}
          toggleMode3={toggleMode3}
        />
      <Alert alert={alert} />
      <div className="container">
        <Form
          showAlert={showAlert}
          heading="Enter Your Text Below"
          mode={mode}
        />
      </div>
    </>
  );
}
export default App1;
