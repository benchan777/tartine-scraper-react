import { NavLink } from "react-router-dom";
import './Title.css';

function Title() {
  return (
    <div className="Title">
      <h1>Tartine Bakery Menu</h1>

      <div>
        <NavLink
          className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}
          to="/">Home</NavLink>
      </div>
    </div>
  )
}

export default Title;
