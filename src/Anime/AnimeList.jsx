import React, { useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AnimeContext } from "../App";
import { Link } from "react-router-dom";

const AnimeList = () => {
  const animeList = useContext(AnimeContext);

  return (
    <React.Fragment>
      {animeList &&
        animeList.map((anime) => (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <h3>{anime.title}</h3>
            <p>{anime.synopsis}</p>
          </Link>
        ))}
    </React.Fragment>
  );
};

export default AnimeList;
