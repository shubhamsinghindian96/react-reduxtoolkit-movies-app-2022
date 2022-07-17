import "./App.scss";

//For Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import MovieListing from "./components/MovieListing/MovieListing";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <div className="container">
            {/* Routing Start  */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<MovieListing />} />
              <Route path="/movie/:imdbId" element={<MovieDetails />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            {/* Routing Finish  */}
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
