import Header from "./components/Header/Header";
import Navbar from "./components/MainNav/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Container } from "@mui/material";
import Trending from "./Pages/Trending/Trending";
import Searchh from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";
import Movies from "./Pages/Movies/Movies";
function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="app">
          <Container>
            <Routes>
              <Route path="/" element={<Trending />} exact />
              <Route path="/Movies" element={<Movies />} />
              <Route path="/Series" element={<Series />} />
              <Route path="/Search" element={<Searchh />} />
            </Routes>
          </Container>
          <Navbar />
        </div>
      </Router>
    </>
  );
}

export default App;
