import { Link } from "react-router-dom";

const cardCharacters = ({ results }) => {
  return (
    <div className="characters">
      <Link to={`/character/${results._id}`}>
        <section>
          <h1>{results.name}</h1>
          <img
            src={results.thumbnail.path + "." + results.thumbnail.extension}
            alt=""
          />
        </section>
      </Link>
    </div>
  );
};
export default cardCharacters;
