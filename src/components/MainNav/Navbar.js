import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [value, setValue] = React.useState(0);
  let NavTo = useNavigate();
  useEffect(() => {
    if (value === 0) NavTo("/");
    else if (value === 2) NavTo("/Movies");
    else if (value === 4) NavTo("/Series");
    else if (value === 6) NavTo("/Search");
  }, [value, NavTo]);
  return (
    <>
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          style={{
            width: "100%",
            position: "fixed",
            bottom: 0,
            zIndex: 100,
            backgroundColor: "rgb(20, 20, 46)",
          }}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Trending"
            icon={<WhatshotIcon />}
          />{" "}
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Movies"
            icon={<MovieIcon />}
          />{" "}
          <BottomNavigationAction
            style={{ color: "white" }}
            label="TV Series"
            icon={<LiveTvIcon />}
          />{" "}
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Search"
            icon={<SearchIcon />}
          />
        </BottomNavigation>
      </Box>
    </>
  );
}

export default Navbar;
