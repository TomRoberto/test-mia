import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
//components
import Header from "./components/Header";
// pages
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import CharactersId from "./pages/CharactersID";
import ComicsId from "./pages/ComicsId";
import Favorites from "./pages/Favorites";
//
const App = () => {
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [favorites, setFavorites] = useState(false);
  const [cardFavorites, setCardFavorites] = useState();
  const [favoris, setFavoris] = useState([Cookies.get("favoris")] || []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/comics"
          element={
            <Comics
              search={search}
              setSearch={setSearch}
              skip={skip}
              setSkip={setSkip}
              favoris={favoris}
              setFavoris={setFavoris}
            />
          }
        />
        <Route
          path="/"
          element={
            <Characters
              search={search}
              setSearch={setSearch}
              skip={skip}
              setSkip={setSkip}
              favoris={favoris}
              setFavoris={setFavoris}
            />
          }
        />

        <Route
          path="/character/:id"
          element={
            <CharactersId
              favorites={favorites}
              setFavorites={setFavorites}
              cardFavorites={cardFavorites}
              setCardFavorites={setCardFavorites}
              favoris={favoris}
              setFavoris={setFavoris}
            />
          }
        />
        <Route
          path="/comic/:id"
          element={
            <ComicsId
              favorites={favorites}
              setFavorites={setFavorites}
              cardFavorites={cardFavorites}
              setCardFavorites={setCardFavorites}
              favoris={favoris}
              setFavoris={setFavoris}
            />
          }
        />
        <Route
          path="/favoris"
          element={<Favorites favoris={favoris} favorites={favorites} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
