import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import components
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Swal from "sweetalert2";

// import Images
import pauseBtn from "../assets/pause-btn.png";
// import falseImg from "../assets/false.png";
// import trueImg from "../assets/true.png";

// import array data
import imgArray from "../data/imgArray";
import gameArray from "../data/gameArray";

export default function Game() {
  const navigate = useNavigate();

  // Pause Function
  const handlePause = () => {
    console.log("Pause")
  }

  return (
    <div className="game">
      <div className="game-header">
        <button onClick={handlePause} className="game-pause-btn">
          <img src={pauseBtn} alt="pause-button-img" />
        </button>
        <div className="game-timer">
          <CountdownCircleTimer
            strokeLinecap={"round"}
            size={60}
            strokeWidth={5}
            isPlaying={isPlaying}
            duration={15}
            trailColor="#45deff"
            colors="#F1C433"
            onComplete={() => complete()}
          >
            {({ remainingTime }) => (
              <h1 className="game-timer-count">{remainingTime}</h1>
            )}
          </CountdownCircleTimer>
        </div>
      </div>
      <div className="game-grid">
        {gameArray.map((card) => (
          // console.log(imgArray[0].falseImg)
          <div onClick={() => handleClick(card)} className="game-card">
            <img
              src={
                card
                  ? imgArray[
                      iterator === imgArrayLength
                        ? imgArrayLength - 1
                        : iterator
                    ].trueImg
                  : imgArray[
                      iterator === imgArrayLength
                        ? imgArrayLength - 1
                        : iterator
                    ].falseImg
              }
              alt="img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}