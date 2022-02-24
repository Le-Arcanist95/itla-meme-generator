import React from "react"
import Meme from "./Meme"

export default function MemeList(props){
    const memes = props.savedMemes.map((item, index) => (
        <Meme 
            key={item.id}
            id={item.id}
            topText={item.topText} 
            bottomText={item.bottomText} 
            imgUrl={item.imgUrl}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
            handleSave={props.handleSave}
        />))

    return(
        <div className="memeList">
            <div className="memeList--header">Saved Memes:</div>
            {memes}
        </div>
    )
}