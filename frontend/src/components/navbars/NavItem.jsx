import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ name = "Home", to, active }) => {
  return (
    <li>
      <Link
        to={to}
        class={`block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent ${
          active ? "md:text-blue-700" : "md:text-slate-500"
        } md:p-0 md:dark:text-blue-500 hover:underline`}
        aria-current="page"
      >
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
