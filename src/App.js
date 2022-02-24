import React, {useEffect, useState} from 'react';
import Header from "./components/Header"
import Form from "./components/Form"
import MemeList from './components/MemeList';

export default function App() {
  const [currMeme, setCurrMeme] = useState({
    topText: "",
    bottomText: "",
    imgUrl: "",
    id: 0
  });
  const [memeData, setMemeData] = useState([]);
  const [savedMemes, setSavedMemes] = useState([]);      
  const randomInt = Math.floor(Math.random() * memeData.length);

  useEffect(() => {
    const getMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const jsonData = await res.json();
      setMemeData(jsonData.data.memes);
    };

    getMemes();
  }, []);
  
  const newMeme = (event) => {
    event.preventDefault();
    const newUrl = memeData[randomInt].url;

    setCurrMeme(prevMeme => ({
      ...prevMeme,
      imgUrl: newUrl
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
    });
    setCurrMeme(prevMeme =>({
      ...prevMeme,
      topText: "",
      bottomText: "",
      id: prevMeme.id + 1
    }));
  }
  const handleDelete = (event) => {
    event.preventDefault();

    const newSavedMemes = [...savedMemes];
    const index = event.target.id;
    newSavedMemes.splice(index, 1);
    setSavedMemes(newSavedMemes)
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
      <MemeList 
        savedMemes={savedMemes}
        handleDelete={handleDelete}
      />
    </div>
  )
}