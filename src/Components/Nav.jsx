import { Link } from "react-router-dom";

export function Nav({}) {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="/reviews">All reviews</Link>
        </li>
        <li>
          <a href="">Categories</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </nav>
  );
}
