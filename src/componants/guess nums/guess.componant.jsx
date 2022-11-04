import "./guess.css";

const Guess = (props) => {
  const checkAns = (val) => {
    let arrBtns = document.querySelectorAll("button");
    for (let i = 0; i < arrBtns.length; i++) {
      arrBtns[i].style.cssText = `opacity: "0.5";
      cursor: auto`;
      arrBtns[i].setAttribute("disabled", "");
      if (i === props.answer) {
        arrBtns[i].style.cssText = `background-color: #04aa6d;opacity: "0.5";
        cursor: auto`;
      }
    }
    if (val === props.answer) {
      props.getResult(true);
    } else {
      props.getResult(false);
    }
    props.setRepeat(true);
  };
  if (props.repeat === false) {
    let arrBtns = document.querySelectorAll("button");
    for (let i = 0; i < arrBtns.length; i++) {
      arrBtns[i].style.cssText = `opacity: "1";
      cursor: pointer;
      background-color:blueviolet;`;
      arrBtns[i].removeAttribute("disabled");
    }
  }
  return (
    <div className="btns-guessing">
      <button onClick={() => checkAns(0)}>{props.options[0]}</button>
      <button onClick={() => checkAns(1)}>{props.options[1]}</button>
      <button onClick={() => checkAns(2)}>{props.options[2]}</button>
    </div>
  );
};

export default Guess;
