import React from "react"

export default function Form(props){
    return(
        <div>
            <form className="memeForm">
                <input 
                    className="memeForm--topText"
                    type="text" 
                    placeholder="Top Text" 
                    name="topText"
                    onChange={props.handleChange} 
                    value={props.currMeme.topText}
                />
                <input
                    className="memeForm--bottomText"
                    type="text" 
                    placeholder="Bottom Text" 
                    name="bottomText"
                    onChange={props.handleChange} 
                    value={props.currMeme.bottomText}
                />
                <div className="meme">
                    <div className="meme--topText"> {props.currMeme.topText} </div>
                    <div className="meme--bottomText"> {props.currMeme.bottomText} </div>
                    <img src={props.currMeme.imgUrl === "" ? "https://github.com/ithomas98/itla-meme-generator/blob/d0bad4ffe3e6d9396c847172ff4979da94f929aa/src/pngwing.com.png" : props.currMeme.imgUrl} alt="" className="meme--img"/>
                </div>
                <button className="memeForm--saveButton" onClick={props.handleSubmit}> Save Meme </button>
                <button className="memeForm--newButton" onClick={props.newMeme}> New Image </button>
            </form>
        </div>
    )
}