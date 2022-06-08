import React from "react";

function Header(props) {
  // return <h1>This is the Header - {props.name}</h1>;
  return (
    <div className="footer-left">
      <div className="text">
        <h3></h3>
        <p></p>
        <div className="ticker">
          <MusicNoteIcon style={{ width: "30px" }}></MusicNoteIcon>
          <marquee direction="left" scrollamount="2">
            {song}
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Header;
