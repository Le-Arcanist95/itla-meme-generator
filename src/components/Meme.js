import React, {useState} from "react"

export default function Meme(props){
    const [isEditing, setIsEditing] = useState(false)
    return(
        <div className="savedMeme">
            <div className="savedMeme--topText">{props.topText}</div>
            <div className="savedMeme--bottomText">{props.bottomText}</div>
            <img alt="" src={props.imgUrl} className="savedMeme--img"/>
            {
                isEditing ?
                <button className="material-icons blue savedMeme--Icon" onClick={() => {
                    props.handleSave(props.id);
                    setIsEditing(false);
                }}>save</button> : 
                <button className="material-icons blue savedMeme--Icon" onClick={() => {
                    props.handleEdit(props.id);
                    setIsEditing(true)
                }}>edit</button>
            }
            <button className="material-icons blue savedMeme--eraseIcon" onClick={() => props.handleDelete(props.id)}>delete</button>
        </div>
    )
}