import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Image from "./components/Image";
import NavBar from "./components/NavBar";
import "./style.css";

const App = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "",
  });

  useEffect(() => {
    getMeme();
  }, []);

  const getMeme = async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const { data } = await response.json();
    const memeUrl =
      data.memes[Math.floor(Math.random() * data.memes.length)].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      image: memeUrl,
    }));
  };

  const onHandleText = (event) => {
    const { value, name } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <div>
      <NavBar />
      <Form meme={meme} getMeme={getMeme} onHandleText={onHandleText} />
      {meme && (
        <Image topText="top-text" bottomText="bottom-text" meme={meme} />
      )}
    </div>
  );
};

export default App;
