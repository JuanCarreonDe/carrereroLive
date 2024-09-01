import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="border-b-[1px] fixed left-0 top-0 w-full flex justify-between items-center px-8 py-2">
      <div>
        <img src="" alt="" className="w-12 h-12" />
      </div>
      <ul className="flex gap-4">
        <li>
          <Link to={"/"}>Unirse</Link>
        </li>
        <li>
          <Link to={"/login"}>Iniciar Sesión</Link>
        </li>
      </ul>
    </nav>
  );
};
