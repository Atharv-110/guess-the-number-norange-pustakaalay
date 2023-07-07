import React from "react";
import { useNavigate } from "react-router-dom";

// Images Import
import levelHeading from "../assets/select-your-level.png";
import doneBtn from "../assets/done.svg"

export default function Level() {
  const navigate = useNavigate();
  return (
    <div className="level">
      <div className="level-box">
        <img src={levelHeading} alt="heading-level" className="level-heading" />
        <div className="radio-item">
          <label htmlFor="level-easy">Easy</label>
          <input type="radio" defaultChecked name="level" value="easy" id="level-easy" />
        </div>

        <div className="radio-item">
          <label htmlFor="level-medium">Medium</label>
          <input type="radio" name="level" value="medium" id="level-medium" />
        </div>

        <div className="radio-item">
          <label htmlFor="level-hard">Hard</label>
          <input type="radio" name="level" value="hard" id="level-hard" />
        </div>
      </div>
      <button className="level-btn">
        <img src={doneBtn} onClick={() => navigate("/game")}  alt="" />
      </button>
    </div>
  );
}