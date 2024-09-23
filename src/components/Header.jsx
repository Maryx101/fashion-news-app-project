import categoryIcon from "../assets/images/menu_sh48vb1ke9as.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/categories" className="btn-category">
          <img src={categoryIcon} alt="Menu button" width={20} /> 
        </Link>
      </div>
    </header>
  );
}

export default Header;
