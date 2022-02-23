import React from "react"

export default function Meme(props){
    return(
        <div className="savedMeme">
            <div className="savedMeme--topText">{props.topText}</div>
            <div className="savedMeme--bottomText">{props.bottomText}</div>
            <img src={props.imgUrl} className="savedMeme--img"/>
            <div class="material-icons blue savedMeme--editIcon">edit</div>
            <div class="material-icons blue savedMeme--eraseIcon">delete</div>
        </div>
    )
}