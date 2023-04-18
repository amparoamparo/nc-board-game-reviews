import React from "react";
export function Header() {
  return (
    <header>
      <div className="logo">
        <img src="./assets/images/logo.svg" alt="" width={100} height="100%" />
        <h1>Board Game Reviews</h1>
      </div>
      <nav aria-labelledby="login-button">
        <ul>
          <li>
            <a href="/login" id="login-button">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
