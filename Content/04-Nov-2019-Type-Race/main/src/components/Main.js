import React, { useState, useEffect, useCallback } from "react";

const testBank = [
  "This is the last random sentence I will be writing and I am going to stop mid-sent",
  "The waves were crashing on the shore; it was a lovely sight.",
  "The old apple revels in its authority.",
  "The shooter says goodbye to his love.",
  "If you like tuna and tomato sauce- try combining the two. It’s really not as bad as it sounds.",
  "Let me help you with your baggage.",
  "Check back tomorrow; I will see if the book has arrived.",
  "I am counting my calories, yet I really want dessert.",
  "My Mum tries to be cool by saying that she likes all the same things that I do.",
  "She folded her handkerchief neatly."
];

const Main = () => {
  const randomPos = Math.floor(Math.random() * testBank.length);
  const [content, setContent] = useState("");
  const [sentence, setSentence] = useState(testBank[randomPos]);
  const [timeRes, setTimeRes] = useState(0);
  const [timeInterval, setTimeInterval] = useState(undefined);

  const onChangeInput = e => {
    // Start the timer
    if (content === "" && e.target.value !== "") {
      clearInterval(timeInterval);
      setTimeInterval(
        setInterval(() => {
          setTimeRes(timeRes => parseFloat((timeRes + 0.01).toFixed(4)));
        }, 10)
      );
    }

    setContent(e.target.value);
  };

  const onChangeSentence = () => {
    setSentence(testBank[Math.floor(Math.random() * testBank.length)]);
    setContent("");
    setTimeRes(0);
    clearInterval(timeInterval);
  };

  useEffect(() => {
    if (content === sentence) {
      clearInterval(timeInterval);
      setTimeInterval(undefined);
      document.querySelector(".ip").style.border = "3px solid blue";
    } else {
      document.querySelector(".ip").style.border = "3px solid red";
    }
  }, [content, sentence, timeInterval]);

  return (
    <div className="main">
      <p className="header">Type Race</p>
      <p className="sentence">{sentence}</p>
      <input
        className="ip"
        placeholder="Type here"
        value={content}
        onChange={e => onChangeInput(e)}
      />
      <p className="res">{timeRes}</p>
      <button onClick={onChangeSentence}>Change</button>
    </div>
  );
};

export default Main;
