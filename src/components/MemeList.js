import React from "react"
import Meme from "./Meme"

export default function MemeList(props){
    const memes = props.savedMemes.map(item => <Meme topText={item.topText} bottomText={item.bottomText} imgUrl={item.imgUrl}/>)

    return(
        <div className="memeList">
            <div className="memeList--header">Saved Memes:</div>
            {memes}
        </div>
    )
}