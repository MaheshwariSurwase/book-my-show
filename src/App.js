import "./App.css";
// Routing
import { Routes, Route } from "react-router-dom";

// React slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// pages
import PlayPage from "./pages/Play.page";
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/movie/:id" element={<MoviePage></MoviePage>}></Route>
      <Route path="/plays" element={<PlayPage></PlayPage>}></Route>
    </Routes>
  );
}

export default App;
