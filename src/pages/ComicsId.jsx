import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

const ComicsId = ({ setFavorites, setFavoris, favoris, favorites }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`
        https://site--marvelback--fy8q84tw4xrp.code.run/comic/${id}`);
        setData(response.data);
        setIsLoading(false);
        setFavorites(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id, favoris, Cookies]);

  return isLoading ? (
    <p>isLoading...</p>
  ) : (
    <div className="comic">
      {!favorites ? (
        <button
          key={id}
          onClick={() => {
            setFavorites(true);
            favoris.push(data.title);
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
      <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
      <div className="comicIMG">
        <img
          src={data.thumbnail.path + "." + data.thumbnail.extension}
          alt=""
        />
      </div>
    </div>
  );
};
export default ComicsId;
