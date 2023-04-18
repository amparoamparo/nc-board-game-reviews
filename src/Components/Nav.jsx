import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <Link to="/reviews" className="nav-link">
            All reviews
          </Link>
        </li>
        <li>
          <a href="/categories" className="nav-link">
            Categories
          </a>
        </li>
      </ul>
    </nav>
  );
}
