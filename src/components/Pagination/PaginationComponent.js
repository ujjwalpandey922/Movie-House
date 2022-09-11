import React from "react";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function PaginationComponent({ setPage, numberOfPages = 10 }) {
  const handleOnClick = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numberOfPages}
          color="primary"
          style={{ margin: 5, color: "white" }}
          //   variant="outlined"
          hideNextButton
          hidePrevButton
          //textContent helps gets page value
          onClick={(e) => handleOnClick(e.target.textContent)}
        />
      </ThemeProvider>
    </div>
  );
}

export default PaginationComponent;
