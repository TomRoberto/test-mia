import { useEffect, useState } from "react";
import axios from "axios";

import CardCharacters from "../components/cardCharacters";
import Pagination from "../components/Pagination";

const Characters = ({
  search,
  setSearch,
  skip,
  setSkip,
  favorites,
  setFavorites,
}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvelback--fy8q84tw4xrp.code.run/characters?name=${search}&skip=${skip}`
        );

        setData([response.data]);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search, skip]);

  return isLoading ? (
    <div>Loading ... </div>
  ) : (
    <>
      <input
        type="text"
        placeholder="Recherche de personnage"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <Pagination setSkip={setSkip} skip={skip} data={data} />

      <div className="character">
        {data.map((elem) => {
          return elem.results.map((elem, index) => {
            console.log(elem);
            return (
              <div key={index}>
                <CardCharacters
                  results={elem}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              </div>
            );
          });
        })}
      </div>
    </>
  );
};

export default Characters;
