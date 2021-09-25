import React ,{useState}from 'react'

export default function Textform(props) {
    const handleUpClick = () =>{
      //  console.log("upper click is fire" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Upper case!", "success");
    }

    const handleloClick = () =>{
      //  console.log("upper click is fire" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lower case!", "success");
    }

    const handleclearClick = () =>{
        setText('');
        props.showAlert("Text is clear!", "success");
      
    }

    const handlecopyClick =() =>{
      var text = document.getElementById('box')
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied to clipboard!", "success");

    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("remove extra spaces!", "success");

    }


    const handleOnChange = (event) =>{
      //  console.log("on chnage");
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');  // ('enter text')you can not use text to update taht variable 
    // setText("new text");
    return (
      <>

        <div className="container" style={{color: props.mode===`dark`?`white`:`#042743` }}>

                     <h1>{props.heading} </h1>
                    <div className="mb-3">
                         
                         <textarea className="form-control"  value= {text} style={{background: props.mode===`dark`?`grey`:`white`, color:props.mode===`dark`?`white`:`#042743`}} onChange={handleOnChange} id="box" rows="8"></textarea>
                   </div>
                   <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleloClick}>convert to lower case </button>                  
                   <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to upper case </button>
                   <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handlecopyClick}>copy text </button>
                   <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>remove space </button>
                   <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleclearClick}>clear text </button>
        </div>
        <div className="container my-3" style={{color: props.mode===`dark`?`white`:`#042743` }}>
          <h2>Your text summary</h2>
           <p>{text.split (/\s+/).filter((element)=>{  return element.length!==0}).length} words and {text.length} caracters</p>  {/*text.split gives the arrey like word */}
          <p>{0.008*text.split (" ").length} minute read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"nothing to preview!! "}</p>
        </div>
        </>
    )
}
