import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../auth/auth";
import PopoverMenu from "./PopoverMenu";

export function Nav() {
  const { user } = useContext(AuthContext);

  return (
    <nav>
      <ul className="flex flex-row flex-wrap gap-2  sm:gap-4 items-center justify-center pt-8 sm:pt-0 h-full">
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
        {!user ? (
          <li className="inline-flex">
            <NavLink
              to="/login"
              className="py-1 px-4 md:py-2 md:px-6
        bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full
        text-white font-semibold
        transition-all"
            >
              Sign in
            </NavLink>
          </li>
        ) : (
          <>
            <li className="flex items-center">
              <PopoverMenu />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
