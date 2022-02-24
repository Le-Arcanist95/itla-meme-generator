import React from "react"

export default function Meme(props){
    return(
        <div className="savedMeme">
            <div className="savedMeme--topText">{props.topText}</div>
            <div className="savedMeme--bottomText">{props.bottomText}</div>
            <img alt="" src={props.imgUrl} className="savedMeme--img"/>
            <button className="material-icons blue savedMeme--editIcon" id={props.id} onClick={props.handleEdit}>edit</button>
            <button className="material-icons blue savedMeme--eraseIcon" id={props.id} onClick={props.handleDelete}>delete</button>
        </div>
    )
}