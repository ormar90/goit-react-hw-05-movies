import { NavLink } from "react-router-dom";

export const AppBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </header>
  );
};
