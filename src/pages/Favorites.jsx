import Cookies from "js-cookie";

const Favorites = ({ favoris, setFavoris }) => {
  return (
    <>
      <div>
        <p> Mes favoris : </p>
        <div className="favoris">
          {favoris.map((elem, index) => {
            return (
              <>
                <div key={index}>{elem}</div>
              </>
            );
          })}
        </div>
      </div>
      <button
        onClick={() => {
          Cookies.remove("favoris");
          setFavoris();
        }}
      >
        Tout supprimer
      </button>
    </>
  );
};
export default Favorites;
