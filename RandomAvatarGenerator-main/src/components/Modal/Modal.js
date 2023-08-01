import React from "react";
import "./Modal.scss";

import CloseIcon from "../../assets/cross.png";

function Modal({ handleModalClose }) {
  return (
    <div className="background">
      <div className="modal">
        <div className="modal-head">
          <h1>About</h1>
          <div className="closeBtnDiv" onClick={handleModalClose}>
            <img src={CloseIcon} alt="close" className="closebtn" />
          </div>
        </div>
        <div className="modal-body">
          <p>
            Random Avatar Generator was a small challenge that I created for
            myself. I wanted to try these two beautiful libraries (
            <a
              href="https://sbuttons.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="linky"
            >
              sButtons
            </a>{" "}
            &
            <a
              href="https://avatars.dicebear.com/"
              target="_blank"
              rel="noreferrer"
              className="linky"
            >
              dicebear
            </a>{" "}
            ) to create something nice.
          </p>
          <br />

          <p>
            Few other cool resourse I used in this project are:
            <ul>
              <li>
                For Glassmorphism design:{" "}
                <a
                  href="https://ui.glass/generator/"
                  target="_blank"
                  rel="noreferrer"
                  className="linky"
                >
                  GlassMorphism Generator
                </a>{" "}
              </li>
              <li>
                For Gradient background:
                <a
                  href="https://webgradients.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="linky"
                >
                  Web Gradients
                </a>{" "}
              </li>
              <li>
                For Heart icon:
                <a
                  href="https://www.htmlsymbols.xyz/unicode/U+1F496"
                  target="_blank"
                  rel="noreferrer"
                  className="linky"
                >
                  Html Symbols
                </a>{" "}
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
