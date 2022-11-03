import { Link, Navigation } from "./AppBar.styled"

export const AppBar = () => {
  return (
    <header>
      <Navigation>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </Navigation>
    </header>
  );
};
