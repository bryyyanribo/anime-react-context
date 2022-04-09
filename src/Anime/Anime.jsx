import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Anime = () => {
  const [anime, setAnime] = useState();
  const params = useParams();
  const { id } = params;

  const getAnime = async () => {
    const { data } = await (fetch(`https://api.jikan.moe/v4/anime/${id}`)).json();
    setAnime(data);
  };

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div>
      {anime && (
        <div>
          <Link to={"/"}>Go Back</Link>
          <h1>
            {anime.title}&nbsp;{`(${anime.title_japanese})`}
          </h1>
          <p>{anime.year}</p>
          <p>{anime.rating}</p>
          <p>{anime.synopsis}</p>
        </div>
      )}
    </div>
  );
};

export default Anime;
