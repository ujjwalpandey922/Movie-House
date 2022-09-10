import { Badge } from "@mui/material";
import React from "react";
import { img_300, unavailable } from "../../config/Config";
import Modals from "../Modals/Modals";
import "./SingleContent.css";
function SingleContent({ id, poster, title, date, media_type, vote_average }) {
  return (
    <Modals media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 7 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      ></img>
      <b className="title">{title}</b>
      <span className="smallDetails">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="smallDetails"> {date}</span>
      </span>
    </Modals>
  );
}

export default SingleContent;
