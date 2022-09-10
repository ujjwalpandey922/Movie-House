import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../config/Config";
import "./Carousel.css";
const handleDragStart = (e) => e.preventDefault();

const Carousel = ({ media_type, id }) => {
  const [credits, setCredits] = useState();
  const items = credits?.map((e) => (
    <div className="carouselItem">
      <img
        src={e.profile_path ? `${img_300}/${e.profile_path}` : noPicture}
        alt={e?.name}
        onDragStart={handleDragStart}
        className="carouselItemImg"
      />
      <b className="actor_name">{e?.name}</b>
    </div>
  ));
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };
  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const data = await res.json();
    setCredits(data.cast);
  };
  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [open]);
  return (
    <AliceCarousel
      autoPlay
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      infinite
      mouseTracking
      items={items}
    />
  );
};
export default Carousel;
