import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <Link to="/" className="home-link">
        Home
      </Link>
    </header>
  );
}

export default Header;
