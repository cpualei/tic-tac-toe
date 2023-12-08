import "./GameBoardBottom.css";

const GameBoardBottom = ({ p1Score, p2Score, tiesScore }) => {
  return (
    <div className="section3">
      <div className="score-tiles" id="p1">
        <p>P1</p>
        <p className="score">{p1Score}</p>
      </div>
      <div className="score-tiles" id="ties">
        <p>TIES</p>
        <p className="score">{tiesScore}</p>
      </div>
      <div className="score-tiles" id="p2">
        <p>P2</p>
        <p className="score">{p2Score}</p>
      </div>
    </div>
  );
};

export default GameBoardBottom;
