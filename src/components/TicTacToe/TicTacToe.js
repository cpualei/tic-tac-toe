import { useState, useEffect } from "react";
import "./TicTacToe.css";
import x from "../../assets/x.png";
import circle from "../../assets/circle.png";
import GameBoardTop from "../GameBoardTop/GameBoardTop";
import GameBoardBottom from "../GameBoardBottom/GameBoardBottom";

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [turns, setTurns] = useState(["", "", "", "", "", "", "", "", ""]);
  let [win, setWin] = useState(false);
  let [p1Score, setP1Score] = useState(0);
  let [p2Score, setP2Score] = useState(0);
  let [tiesScore, setTiesScore] = useState(0);

  const handleTurn = (e, idx) => {
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src=${x} style="margin:50px"/>`;
      turns[idx] = "x";
      setCount((count += 1));
    } else {
      e.target.innerHTML = `<img src=${circle} style="margin:50px"/>`;
      turns[idx] = "o";
      setCount((count += 1));
    }
    winner();

    if (win) {
      setCount()
    }
  };

  const winner = () => {
    if (turns[0] === turns[1] && turns[1] === turns[2] && turns[2] !== "") {
      won(true);
    } else if (
      turns[3] === turns[4] &&
      turns[4] === turns[5] &&
      turns[5] !== ""
    ) {
      won(true);
    } else if (
      turns[6] === turns[7] &&
      turns[7] === turns[8] &&
      turns[8] !== ""
    ) {
      won(true);
    } else if (
      turns[0] === turns[3] &&
      turns[3] === turns[6] &&
      turns[6] !== ""
    ) {
      won(true);
    } else if (
      turns[1] === turns[4] &&
      turns[4] === turns[7] &&
      turns[7] !== ""
    ) {
      won(true);
    } else if (
      turns[2] === turns[5] &&
      turns[5] === turns[8] &&
      turns[8] !== ""
    ) {
      won(true);
    } else if (
      turns[0] === turns[4] &&
      turns[4] === turns[8] &&
      turns[8] !== ""
    ) {
      won(true);
    } else if (
      turns[2] === turns[4] &&
      turns[4] === turns[6] &&
      turns[6] !== ""
    ) {
      won(true);
    }
  };

  const won = (winner) => {
    if (winner) {
      setWin(true);
    }
  };

  const handleReset = () => {
    setTurns(["", "", "", "", "", "", "", "", ""]);
  };

  return (
    <div className="tic-tac-toe-container">
      <GameBoardTop count={count} handleReset={handleReset} />
      <div className="section2">
        <div className="rows" id="row1">
          <div className="squares" onClick={(e) => handleTurn(e, 0)}></div>
          <div className="squares" onClick={(e) => handleTurn(e, 1)}></div>
          <div className="squares" onClick={(e) => handleTurn(e, 2)}></div>
        </div>
        <div className="rows" id="row2">
          <div className="squares" onClick={(e) => handleTurn(e, 3)}></div>
          <div className="squares" onClick={(e) => handleTurn(e, 4)}></div>
          <div className="squares" onClick={(e) => handleTurn(e, 5)}></div>
        </div>
        <div className="rows" id="row3">
          <div className="squares" onClick={(e) => handleTurn(e, 6)}></div>
          <div className="squares" onClick={(e) => handleTurn(e, 7)}></div>
          <div className="squares" onClick={(e) => handleTurn(e, 8)}></div>
        </div>
      </div>
      <GameBoardBottom
        p1Score={p1Score}
        p2Score={p2Score}
        tiesScore={tiesScore}
      />
    </div>
  );
};

export default TicTacToe;
