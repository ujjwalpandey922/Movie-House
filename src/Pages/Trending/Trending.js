import React, { useEffect, useState } from "react";
import PaginationComponent from "../../components/Pagination/PaginationComponent";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Trending.css";

function Trending() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const fetchTrending = async () => {
    const res = await fetch(`
        https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
    const data = await res.json();
    setContent(data.results);
  };
  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);
  return (
    <>
      <span className="headingTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((ele) => (
            <SingleContent
              key={ele.id}
              id={ele.id}
              poster={ele.poster_path}
              title={ele.title || ele.name}
              date={ele.first_air_date || ele.release_date}
              media_type={ele.media_type}
              vote_average={ele.vote_average}
            />
          ))}
      </div>
      <PaginationComponent setPage={setPage} />
    </>
  );
}

export default Trending;
