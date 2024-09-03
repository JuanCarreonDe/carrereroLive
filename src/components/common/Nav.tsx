import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

export const Nav = () => {
  return (
    <nav className="border-b-[1px] border-gray fixed left-0 top-0 w-full flex justify-between items-center px-8 py-2 z-50 bg-gray">
      <div>
        <img src={logo} alt="" className="w-12 h-12" />
      </div>
      <ul className="flex gap-4">
        <li>
          <Link className="hover:scale-105 transition-transform" to={"/"}>Unirse</Link>
        </li>
        <li>
          <Link className="hover:scale-105 transition-transform" to={"/login"}>Iniciar Sesión</Link>
        </li>
      </ul>
    </nav>
  );
};
