import "./Circle.css";
import { IoMdCheckmark, IoIosMenu, IoIosMore } from "react-icons/io";
import {
  VscTriangleLeft,
  VscTriangleRight,
  VscChromeClose,
} from "react-icons/vsc";
import { useState } from "react";

export default function Circle(props, next) {
  const [chapters, setChapters] = useState(false);

  function showChapters() {
    setChapters(true);
  }

  function hideChapters() {
    setChapters(false);
  }

  return (
    <div className="nav-div">
      {!chapters && (
        <span className="v">
          <div className="menu-div">
            <div
              className="menu-item"
              onClick={() => {
                console.log("chapters");
              }}
            >
              <IoIosMenu />
            </div>
            <div
              className="menu-item"
              onClick={() => {
                console.log("right button");
              }}
            >
              <VscTriangleRight />
            </div>
            <div className="menu-item">
              <IoIosMore />
            </div>
            <div className="menu-item" onClick={"left button"}>
              <VscTriangleLeft />
            </div>
          </div>
          <div
            className="circle1"
            onClick={() => {
              console.log("clicked");
            }}
          >
            <div className="circle2">
              <div className="circle3" onClick={showChapters}>
                <IoMdCheckmark
                  style={{
                    fontSize: "70px",
                  }}
                />
              </div>
            </div>
          </div>
        </span>
      )}

      {chapters && (
        <div className="chapters-div">
          <div className="chapters">CHAPTER 1</div>
          <div className="chapters">CHAPTER 2</div>
          <div className="chapters">CHAPTER 3</div>
          <div className="chapters">CHAPTER 4</div>
          <div className="chapters">CHAPTER 5</div>
          <div className="chapters">CHAPTER 6</div>
          <div className="x-button" onClick={hideChapters}>
            <VscChromeClose />
          </div>
        </div>
      )}
    </div>
  );
}
