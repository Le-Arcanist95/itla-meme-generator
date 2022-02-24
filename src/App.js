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
  const [editStorage, setEditStorage] = useState({})     

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

    const randomInt = Math.floor(Math.random() * memeData.length);
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
      let updatedList = [...prevList, currMeme];
      return(updatedList);
    });
    setCurrMeme(prevMeme =>({
      ...prevMeme,
      topText: "",
      bottomText: "",
      id: prevMeme.id + 1
    }));
    console.log(savedMemes)
  }
  const handleDelete = (id) => {
    setSavedMemes(prevMemes => prevMemes.filter(meme => meme.id !== id));
  }

  const handleEdit = (id) => {
      setEditStorage({...currMeme});
      setCurrMeme(savedMemes[id]);
  }
  const handleSave = (id) => {
    setSavedMemes(prevSavedMemes => (prevSavedMemes.map(meme => id === meme.id ? currMeme : meme)));
    setCurrMeme({...editStorage});
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
        handleEdit={handleEdit}
        handleSave={handleSave}
      />
    </div>
  )
}