import React from "react";

const Image = ({ meme }) => {
  return (
    <div className="image__grid">
      <div className="meme__top__text">{meme.topText}</div>
      <img className="image__meme" src={meme.image} alt="generated_meme" />
      <div className="meme__bottom__text">{meme.bottomText}</div>
    </div>
  );
};

export default Image;
