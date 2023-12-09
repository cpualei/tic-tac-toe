import x from "../../assets/x.png";
import circle from "../../assets/circle.png";
import refresh from "../../assets/refresh.png";
import "./GameBoardTop.css";

const GameBoardTop = ({ count, handleReset }) => {
  return (
    <div className="section1">
      <div>
        <img className="x" src={x} />
        <img src={circle} />
      </div>
      <div>
        <div className="player-turn-div">
          <img src={count % 2 === 0 ? circle : x} />
          <p>TURN</p>
        </div>
      </div>
      <button className="refresh-button" onClick={handleReset}>
        <img id="refresh-icon" src={refresh} />
      </button>
    </div>
  );
};

export default GameBoardTop;
