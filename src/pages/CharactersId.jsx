import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Cookies from "js-cookie";

const CharactersId = ({ setFavorites, setFavoris, favoris, favorites }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvelback--fy8q84tw4xrp.code.run/character/${id}`
        );
        setData(response.data);
        setIsLoading(false);
        setFavorites(false);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(data);
    fetchData();
  }, [id, favoris, Cookies]);
  console.log(data);
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <div className="characterId">
        <div>
          {!favorites ? (
            <button
              key={id}
              onClick={() => {
                setFavorites(true);
                favoris.push(data.name);
                Cookies.set("favoris", favoris, { expires: 10 });
                setFavoris(favoris);
              }}
            >
              Ajouter en favoris
            </button>
          ) : (
            <button
              key={id}
              onClick={() => {
                setFavorites(false);
                Cookies.remove("favoris");
                setFavoris();
              }}
            >
              Retirer des favoris
            </button>
          )}
        </div>
        <div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <img
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt=""
          />
        </div>
        <div>
          <h1>Comics</h1>
          {data.comics.map((comics, index) => {
            return (
              <Link key={index} to={`/comic/${comics}`}>
                <p>Comics :</p>
                <p>{comics}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CharactersId;
