import React from "react"

export default function Meme(props){
    return(
        <div className="meme">
            <div className="meme--topText">{props.topText}</div>
            <div className="meme--bottomText">{props.bottomText}</div>
            <img src={props.imgUrl} className="meme--img"/>
        </div>
    )
}