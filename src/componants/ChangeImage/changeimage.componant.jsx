import correct from "../assets/correct.png";
import guess from "../assets/guess.png";
import sad from "../assets/sad.jpg";
import "./changeimage.css";

const ChangeImage = (props) => {
  return (
    <div>
      {props.answer === "win" ? (
        <img src={correct} />
      ) : props.answer === "lose" ? (
        <img src={sad} />
      ) : (
        <img src={guess} />
      )}
    </div>
  );
};

export default ChangeImage;
