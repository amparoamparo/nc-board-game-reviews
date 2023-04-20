import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <ul className="flex flex-row flex-wrap-reverse gap-2 sm:gap-4 items-center justify-center pt-8 sm:pt-0">
        <li className="">
          <NavLink
            to="/reviews"
            className="bg-white hover:bg-bright-yellow
            py-1 px-4 md:py-2 md:px-6
            border border-gray-300 hover:border-gray-400 active:border-gray-800 rounded-full
            font-medium text-base md:text-lg text-gray-800
            transition-all"
          >
            All reviews
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink
            to="/categories"
            className="bg-white hover:bg-bright-yellow 
              py-1 px-4 md:py-2 md:px-6
              border border-gray-300 hover:border-gray-400 active:border-gray-800 rounded-full
              font-medium text-base md:text-lg text-gray-800
              transition-all"
          >
            Categories
          </NavLink>
        </li>
        <li className="inline-flex">
          <a
            href="/login"
            id="login-button"
            className="py-1 px-4 md:py-2 md:px-6
              bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full
              text-white font-semibold
              transition-all"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
