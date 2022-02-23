import React, {useEffect, useState} from 'react';

export default function App() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imgUrl: ""
  });
  const [memeData, setMemeData] = useState([]);

  useEffect(() => {
    const getMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json()
      setMemeData(data.data.memes)
    };

    getMemes();
  }, []);
  const newMeme = () => {
    const randomNum = Math.floor(Math.random() * memeData.length);
    const newUrl = memeData[randomNum].url;

    setMeme(prevMeme => ({
      ...prevMeme,
      imgUrl: newUrl
    }));
  };
  const handleChange = (event) => {
    const {name, value} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }));
  };

  return(
    <div>Meme Generator</div>
  )
}