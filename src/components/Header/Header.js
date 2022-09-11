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
        <LiveTvIcon fontSize="large" style={{ paddingRight: "20px" }} />{" "}
        MOVIE-HOUSE
        <MovieCreationOutlinedIcon
          fontSize="large"
          style={{ paddingLeft: "20px" }}
        />
      </span>
    </>
  );
}

export default header;
