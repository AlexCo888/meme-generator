import React from "react";

const Form = ({ getMeme, meme, onHandleText }) => {
  return (
    <main>
      <form className="form">
        <input
          className="form__input"
          type="text"
          placeholder="Enter some top text"
          name="topText"
          value={meme.topText}
          onChange={onHandleText}
        />
        <input
          className="form__input"
          type="text"
          placeholder="Enter some bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={onHandleText}
        />
        <button onClick={getMeme} className="form__button">
          Get a New Meme Image 🎨
        </button>
      </form>
    </main>
  );
};

export default Form;
