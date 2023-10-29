import React, { useState } from 'react'

export default function TextArea(props) {
    const handleUpClicked= ()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case","success");
    }

    const handleDownClicked= ()=>{
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lower Case","success");
    }

    const handleTopClicked= ()=>{
      let newText="";
      setText(newText)
      props.showAlert("Text has been cleared","success");
    }


    const handleOnChange= (event)=>{
        setText(event.target.value)
    }

    const handleCopy= ()=>{
      let newText= document.getElementById("myBox");
      newText.select();
      navigator.clipboard.writeText(newText.value)
      props.showAlert("Text has been copied","success");
    }
 
    const handleExtraSpaces= ()=>{
      let newText= text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces has been removed","success");
    }


    const[text,setText]= useState("");
  return (
    <>
    <div style={{color:props.mode==="dark"?"white":"black"}} >
    <div className="mb-3 " >
        <h4>{props.heading}</h4>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==="light"?"white":"#072f69",color:props.mode==="dark"?"white":"black"}}></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClicked}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1 my-3" onClick={handleDownClicked}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-1 my-3" onClick={handleTopClicked}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-3" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container">
        <h3>Text analysis</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters <br /> {(text.split(" ").filter((element)=>{return element.length!==0}).length)*0.008} minutes to read</p>
    </div>
    <div className="container">
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text to preview"}</p>
    </div>
    </div>
    </>
  )
}
