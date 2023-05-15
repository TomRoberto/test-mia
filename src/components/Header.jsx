import Marvel from "/Marvel_Logo.svg.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="Header">
      <Link to="/">
        <img src={Marvel} alt="logo" />
      </Link>

      <div>
        <Link to="/">
          <p>Personnage</p>
        </Link>

        <Link to="/comics">
          <p>Comics</p>
        </Link>

        <Link to="/favoris">
          <p>Favoris</p>
        </Link>
      </div>
    </section>
  );
};
export default Header;
