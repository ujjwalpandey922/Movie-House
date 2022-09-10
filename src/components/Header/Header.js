import React from "react";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import "./Header.css";
function header() {
  return (
    <>
      <span
        className="header"
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <LiveTvIcon fontSize="large" /> MOVIE-HOUSE
        <MovieCreationOutlinedIcon fontSize="large" />
      </span>
    </>
  );
}

export default header;
