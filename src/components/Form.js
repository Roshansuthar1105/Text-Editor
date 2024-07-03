import React, { useState } from "react";
// import App.css from "../App";
export default function Form(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    console.log("onchange...");
    setText(event.target.value);
  };
  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  };
  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
  };
  const handleCopy = () => {
    // var newText = document.getElementById('myBox');
    // setText(newText);
    // newText.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","success");
  };
  const handleExtrasp = () => {
    var newText =text.split(/[ ]+/);
    console.log(newText);
    setText(newText.join(" "));
    console.log(newText);
    props.showAlert("Extra Spaces removed","warning");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been removed","danger");

  };
  const capitalize = () => {
    var newText =text.split(/[ ]+/);
    const cap = (word)=>{
      let lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    for (let index = 0; index < newText.length; index++) {
       newText[index] = cap(newText[index]);
    }
     setText( newText.join(" "));
     props.showAlert("Text Capitalized","success");

  };
  return (
    <div >
      <h1>{props.heading}</h1>
      <div className="my-13">
        <textarea
          style={{backgroundColor:props.mode==='dark' ?'#333':'#fff',color: props.mode==='dark' ?'#fff':'#000'}}
          className="form-control"
          id="myBox"
          rows="10"
          value={text}
          placeholder='Enter Something here'
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="Container my-3">
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 " onClick={handleUppercase}>
          Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowercase}>
          LowerCase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy 
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtrasp}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={capitalize}>
          Capitalize
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 " onClick={handleClear}>
          Clear
        </button>
        <div className="Container">
          <h2>Your Text Summery</h2>
          <p> {text.split(/\s+/).filter((e)=>{return e.length!==0}).length } words and {text.length} charectors </p>
          <p> {text.split(/\s+/).filter((e)=>{return e.length!==0}).length  * 0.008} Minuts words </p>
        </div>
      </div>
        <div className="Container">
          <h2>Preview</h2>
          <p> {text.length >1 ? text :"Enter Something to preview" }</p>
          {/* <p> {text.split(" ")[2][0] }</p> */}
        </div>
    </div>
  );
}
