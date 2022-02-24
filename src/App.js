import React, {useEffect, useState} from 'react';
import Header from "./components/Header"
import Form from "./components/Form"
import MemeList from './components/MemeList';
import Meme from './components/Meme';

export default function App() {
  const [currMeme, setCurrMeme] = useState({
    topText: "",
    bottomText: "",
    imgUrl: "https://i.imgflip.com/4t0m5.jpg",
    id: 0
  });
  const [memeData, setMemeData] = useState([]);
  const [savedMemes, setSavedMemes] = useState([]);

  useEffect(() => {
    const getMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setMemeData(data.data.memes);
    };

    getMemes();
  }, []);
  
  const newMeme = (event) => {
    event.preventDefault();
    
    const newUrl = memeData[Math.floor(Math.random() * memeData.length)].url;

    setCurrMeme(prevMeme => ({
      ...prevMeme,
      imgUrl: newUrl,
      id: memeData.data.id
    }));
  };
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setCurrMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSavedMemes(prevList => {
      let newList = prevList;
      newList.push(currMeme);
      return(newList);
    })

    setCurrMeme(() =>({
      topText: "",
      bottomText: "",
      imgUrl: "https:\/\/i.imgflip.com\/4t0m5.jpg"
    }))
    console.log(savedMemes)
  }
    
  return(
    <div>
      <Header />
      <Form 
        memeData={memeData} 
        currMeme={currMeme} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        newMeme={newMeme}
      />
      <MemeList savedMemes={savedMemes}/>
    </div>
  )
}