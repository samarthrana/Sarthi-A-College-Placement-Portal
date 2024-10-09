import React from "react";

const Header = ({ heading1, heading2, heading3 }) => {
  return (
    <div
      className="header_wrapper"
      style={{
        width: "90vw",
        height: "16vh",
        margin: "2vh 4vh",
        padding: "1vh 2vh",

        background: "#121927",
        // background: "lightblue",
        border: "red 2px",
        // borderRadius: "30px",
      }}
    >
      <div
        className="heading_1"
        style={{
          height: "30%",
          fontFamily: "Nunito Sans, sans-serif",
          fontSize: "3vh",
          background: "transparent",
          color: "white",

          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {heading1}
      </div>

      <div
        className="heading_2"
        style={{
          height: "40%",
          fontFamily: "Anton, sans-serif",
          fontSize: "5vh",
          background: "transparent",
          color: "white",
          // color: "white",

          display: "flex",
          alignItems: "center",
        }}
      >
        {heading2}
      </div>

      <div
        className="sub-heading"
        style={{
          height: "30%",
          fontSize: "2vh",
          background: "transparent",
          color: "white",
          // color: "#718096",

          display: "flex",
          alignItems: "center",
        }}
      >
        {heading3}
      </div>
    </div>
  );
};

export default Header;
