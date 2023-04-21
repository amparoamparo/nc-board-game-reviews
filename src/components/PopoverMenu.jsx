import { Popover, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import AuthContext from "../auth/auth";
import { NavLink } from "react-router-dom";

export default function PopoverMenu() {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center gap-2">
        <div className="flex flex-row items-center">
          <img
            src={user.avatar_url}
            alt=""
            width={48}
            height={48}
            className="rounded-full aspect-square object-contain border border-gray-300 p-1"
          />
          <span
            className="material-symbols-rounded text-gray-500 active:text-gray-800 ui-open:text-gray-800"
            aria-hidden="true"
          >
            expand_more
          </span>
        </div>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 max-w-screen mt-1 flex justify-center py-2 left-1/2 transform -translate-x-1/2">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
            <NavLink
              to={null}
              className="flow-root rounded-md p-4 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
            >
              <span className="flex items-center w-full whitespace-nowrap gap-2 text-sm font-semibold text-gray-400 cursor-default">
                <span
                  className="material-symbols-rounded text-gray-400"
                  aria-hidden="true"
                >
                  add_circle
                </span>
                Post a review
              </span>
            </NavLink>
            <hr />
            <NavLink
              to="/logout"
              className="flow-root rounded-md p-4 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              onClick={handleLogout}
            >
              <span className="flex items-center gap-2 w-full whitespace-nowrap text-sm font-semibold text-gray-900">
                <span
                  className="material-symbols-rounded text-gray-600"
                  aria-hidden="true"
                >
                  logout
                </span>
                Sign out
              </span>
            </NavLink>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
