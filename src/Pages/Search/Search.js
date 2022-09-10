import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PaginationComponent from "../../components/Pagination/PaginationComponent";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Search.css";
function Search() {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState();
  const [noOFPages, setNoOFPages] = useState();
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  const fetchSearch = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    const data = await res.json();
    setContent(data.results);
    setNoOFPages(data.total_pages);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div
          className="searchBox"
          style={{ display: "flex", margin: "15px 0" }}
        >
          <TextField
            style={{ flex: 1, backgroundColor: "white" }}
            className="searchBox"
            label="Search"
            variant="filled"
            size="small"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            variant="container"
            style={{ marginLeft: 10 }}
            onClick={fetchSearch}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>
        <Tabs
          value={type}
          textColor="primary"
          indicatorColor="primary"
          onChange={(e, newValue) => {
            setType(newValue);
            setPage(1);
          }}
        >
          <Tab label="Search Movies" style={{ width: "50%" }} />
          <Tab label="Search T.V Series" style={{ width: "50%" }} />
        </Tabs>
      </ThemeProvider>
      <div className="Search">
        {content &&
          content.map((ele) => (
            <SingleContent
              key={ele.id}
              id={ele.id}
              poster={ele.poster_path}
              title={ele.title || ele.name}
              date={ele.first_air_date || ele.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={ele.vote_average}
            />
          ))}

        {searchText &&
          !content &&
          (type ? <h2>NO SERIES FOUND</h2> : <h2>NO MOVIES FOUND</h2>)}
      </div>
      {noOFPages > 1 && <PaginationComponent setPage={setPage} />}
    </div>
  );
}

export default Search;
