import React, { useEffect } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Anime from "./Anime/Anime";
import AnimeList from "./Anime/AnimeList";

export const AnimeContext = React.createContext();

const App = () => {
  const [animeList, setAnimeList] = React.useState();

  const getAnimeList = async () => {
    const { data } = await (fetch("https://api.jikan.moe/v4/anime")).json();
    setAnimeList(data);
  };

  useEffect(() => {
    getAnimeList();
  }, []);

  return (
    <AnimeContext.Provider value={animeList}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AnimeList value={animeList} />} />
          <Route path="/anime/:id" element={<Anime />} />
        </Routes>
      </BrowserRouter>
    </AnimeContext.Provider>
  );
};

export default App;
