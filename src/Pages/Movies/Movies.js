import React, { useEffect, useState } from "react";
import Genres from "../../components/Genres/Genres";
import PaginationComponent from "../../components/Pagination/PaginationComponent";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenres from "../../hooks/useGenres";
import "./Movies.css";
function Movies() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenres(selectedGenres);

  const fetchTrending = async () => {
    const res = await fetch(`
https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
    const data = await res.json();
    setContent(data.results);
    setNumberOfPages(data.total_pages);
  };
  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page, selectedGenres]);
  return (
    <>
      <span className="headingTitle">Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="movie">
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
      {numberOfPages > 1 && (
        <PaginationComponent setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </>
  );
}

export default Movies;
