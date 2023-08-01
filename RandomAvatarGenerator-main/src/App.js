import { useCallback, useEffect, useState } from "react";
import "./App.scss";
import Link from "./components/Link/Link";
import Modal from "./components/Modal/Modal";
import ModeButton from "./components/ModeButton/ModeButton";
import { linkData, modeData } from "./data";

function App() {
  const [avatarImg, setAvatarImg] = useState(null);
  const [mode, setMode] = useState("big-smile");
  const [showModal, setShowModal] = useState(false);
  const getAvatar = useCallback(() => {
    let randomNumber = Math.floor(Math.random() * 100);
    let avatarUrl = `https://avatars.dicebear.com/api/${mode}/${randomNumber}.svg`;
    setAvatarImg(avatarUrl);
  }, [mode]);

  useEffect(() => {
    getAvatar();
  }, [getAvatar]);

  const handleModeChange = (mode) => {
    setMode(mode);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      <div className="mainContainer">
        <div className="main">
          <h1 className="heading">Random Avatar Generator</h1>
          <img className="avatar loading" src={avatarImg} alt="avatar" />

          <div className="menu">
            {modeData.map((data) => (
              <ModeButton
                currentMode={mode}
                mode={data.mode}
                handleModeChange={handleModeChange}
              />
            ))}
          </div>

          <div className="generateNextBtn_container">
            <button
              className="sbtn  key-btn rounded-btn blue-btn"
              onClick={getAvatar}
            >
              Generate Next
            </button>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="support">
          {linkData.map((link) => (
            <Link href={link.href} icon={link.icon} />
          ))}{" "}
        </div>

        <div
          className="sbtn  diag-btn rounded-btn blue-btn customized-btn"
          onClick={() => setShowModal(true)}
        >
          About
        </div>

        <div className="mydetail">
          Made with &#128150; by{" "}
          <a
            href="https://github.com/SushilBajracharya01"
            target="_blank"
            rel="noreferrer"
            className="linky"
          >
            Sushil S. Bajracharya
          </a>
        </div>
      </div>

      {showModal && <Modal handleModalClose={handleModalClose} />}
    </div>
  );
}

export default App;
