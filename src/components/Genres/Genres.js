import React, { useEffect } from "react";
import Chip from "@mui/material/Chip";

function Genres({
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) {
  const fetchGenres = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const data = await res.json();
    setGenres(data.genres);
  };
  const handleRemove = (g) => {
    setGenres([...genres, g]);
    setSelectedGenres(selectedGenres.filter((e) => e.id !== g.id));
    setPage(1);
  };
  const handleAdd = (g) => {
    setSelectedGenres([...selectedGenres, g]);
    setGenres(genres.filter((e) => e.id !== g.id));
    setPage(1);
  };

  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres([]);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {selectedGenres &&
        selectedGenres.map((e) => (
          <Chip
            key={e.id}
            label={e.name}
            // onDelete={handleDelete}
            style={{ margin: 5, color: "white" }}
            color="primary"
            onDelete={() => handleRemove(e)}
            size="large"
          />
        ))}
      {genres &&
        genres.map((e) => (
          <Chip
            key={e.id}
            label={e.name}
            // onDelete={handleDelete}
            style={{ margin: 5, color: "white" }}
            onClick={() => handleAdd(e)}
            size="large"
          />
        ))}
    </>
  );
}

export default Genres;
