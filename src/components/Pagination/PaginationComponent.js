import React from "react";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";

function PaginationComponent({ setPage, numberOfPages = 10 }) {
  const handleOnClick = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  const theme = createTheme({
    palette: {
      main: dark[500],
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
      <ThemeProvider theme={theme}>
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
