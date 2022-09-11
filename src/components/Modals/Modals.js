import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Modals.css";
import Carousel from "../carousel/Carousel";

import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/Config";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "80%",
  bgcolor: "background.paper",
  border: "2px solid white",
  borderRadius: 10,
  backgroundColor: "rgba(24, 24, 28, 0.861)",
  color: "white",
  boxShadow: 24,
  p: 4,
};

export default function Modals({ children, media_type, id }) {
  const [open, setOpen] = React.useState(false);
  const [video, setVideo] = React.useState();
  const [content, setContent] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchModalData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const data = await res.json();
    setContent(data);
  };
  const fetchVideoData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const data = await res.json();
    setVideo(data.results[0]?.key);
  };
  React.useEffect(() => {
    fetchVideoData();
    fetchModalData();
    // eslint-disable-next-line
  }, [open]);
  return (
    <>
      <div onClick={handleOpen} className="media">
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {content && (
              <div className="Modal">
                <img
                  alt={content.name || content.title}
                  className="contentPotrait"
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                />
                <img
                  alt={content.name || content.title}
                  className="contentLandScape"
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                />
                <div className="contentDetails">
                  <span className="ModalTitle">
                    {content.title || content.name}(
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagLine">{content.tagline}</i>
                  )}
                  <span className="overview">{content.overview} </span>
                  <div className="carousel">
                    <Carousel media_type={media_type} id={id} />
                  </div>
                  <Button
                    className="youTubeButton"
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    target="_blank"
                    color="error"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch The trailer
                  </Button>
                </div>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
