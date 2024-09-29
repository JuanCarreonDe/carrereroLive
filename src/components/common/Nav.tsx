import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { pathBase } from "../../constants";
import { useSupabaseStore } from "../../stores/supabaseStore";

export const Nav = () => {
  const { session, signOut } = useSupabaseStore(); // Acceder a signIn y session del store

  return (
    <nav className="border-b-[1px] border-gray fixed left-0 top-0 w-full flex justify-between items-center px-8 py-2 z-50 bg-gray">
      <Link to={`/${pathBase}`}>
        <img src={logo} alt="" className="w-12 h-12" />
      </Link>
      <ul className="flex gap-4">
        {session ? (
          <Link onClick={signOut} to={`/${pathBase}/login`}>
            SigOut
          </Link>
        ) : (
          <>
            <li>
              <Link
                className="hover:scale-105 transition-transform"
                to={`/${pathBase}/register`}
              >
                Unirse
              </Link>
            </li>
            <li>
              <Link
                className="hover:scale-105 transition-transform"
                to={`/${pathBase}/login`}
              >
                Iniciar Sesión
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
