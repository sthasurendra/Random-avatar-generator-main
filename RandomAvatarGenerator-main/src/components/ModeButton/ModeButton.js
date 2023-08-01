import React from "react";
import "./ModeButton.scss";

function ModeButton({ mode, currentMode, handleModeChange }) {
  return (
    <button
      className={`btn sbtn  handwritten-btn rounded-btn ${
        currentMode === mode ? "active" : ""
      }`}
      onClick={() => handleModeChange(mode)}
    >
      {mode}
    </button>
  );
}

export default ModeButton;
