import { Link } from "react-router-dom";

const cardComics = ({ results }) => {
  return (
    <>
      <Link to={`/comic/${results._id}`}>
        <div>
          <div className="box">
            <h1>{results.title}</h1>
            <img
              src={results.thumbnail.path + "." + results.thumbnail.extension}
            />

            <p>{results.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default cardComics;
