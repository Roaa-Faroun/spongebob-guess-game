import "./App.css";
import "https://unpkg.com/phosphor-icons";
import Guess from "./componants/guess nums/guess.componant";
import ChangeImage from "./componants/ChangeImage/changeimage.componant";

import { useState } from "react";

function App() {
  const getrand = () => {
    return Math.trunc(Math.random() * 101);
  };

  const getRandAnswer = () => {
    return Math.trunc(Math.random() * 3);
  };
  const reload = () => {
    setRepeat(!repeat);
    setAnswer(getRandAnswer());
    setOptions([getrand(), getrand(), getrand()]);
    setImage("");
  };
  const getResult = (e) => {
    if (e === true) {
      setImage("win");
      setCorrectCount(correctCount + 1);
    } else if (e === false) {
      setImage("lose");
      setWrongCount(wrongCount + 1);
    }
  };
  let [answer, setAnswer] = useState(getRandAnswer());
  let [options, setOptions] = useState([getrand(), getrand(), getrand()]);
  let [wrongCount, setWrongCount] = useState(0);
  let [correctCount, setCorrectCount] = useState(0);
  let [repeat, setRepeat] = useState(false);
  let [image, setImage] = useState("");

  return (
    <div className="App">
      <h3>Guess The Number Game</h3>

      <div className="count">
        <div>Correct: {correctCount}</div>
        <div className="icon" onClick={reload}>
          {repeat === true ? <i className="ph-repeat"></i> : ""}
        </div>
        <div>Wrong: {wrongCount}</div>
      </div>
      <ChangeImage answer={image} />
      <p>What number is in my mind?</p>
      <Guess
        options={options}
        answer={answer}
        getResult={getResult}
        setRepeat={setRepeat}
        repeat={repeat}
      />
    </div>
  );
}

export default App;
