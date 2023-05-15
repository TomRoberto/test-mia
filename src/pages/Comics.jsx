import axios from "axios";
import { useState, useEffect } from "react";
import CardComics from "../components/cardComics";
import Pagination from "../components/Pagination";

const Comics = ({
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
          `https://site--marvelback--fy8q84tw4xrp.code.run/comics?title=${search}&skip=${skip}`
        );
        setData([response.data]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [search, skip]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <input
        type="text"
        placeholder=" Recherche de comics "
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <Pagination setSkip={setSkip} skip={skip} data={data} />

      <div className="description">
        {data.map((elem) => {
          return elem.results.map((elem, index) => {
            console.log(elem.description);

            return (
              elem.description && (
                <div key={index}>
                  <CardComics
                    results={elem}
                    favorites={favorites}
                    setFavorites={setFavorites}
                  />
                </div>
              )
            );
          });
        })}
      </div>
    </>
  );
};
export default Comics;
