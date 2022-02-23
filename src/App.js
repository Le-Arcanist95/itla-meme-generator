import React, {useEffect, useState} from 'react';

export default function App() {
  const [currMeme, setCurrMeme] = useState({
    topText: "",
    bottomText: "",
    imgUrl: ""
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

  const newMeme = () => {
    const newUrl = memeData[Math.floor(Math.random() * memeData.length)].url;

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
    })
  }

  return(
    <div>Meme Generator</div>
  )
}