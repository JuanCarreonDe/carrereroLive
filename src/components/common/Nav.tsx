import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
// import { useAuth } from "../../hooks/useAuth";
import { useAuthStore } from "../../stores/useAuthStore";
import { CiLogin } from "react-icons/ci";

export const Nav = () => {
  const { signOut, session, subscription } = useAuthStore();
  return (
    <nav className="border-b-[1px] border-gray fixed left-0 top-0 w-full flex justify-between items-center px-8 py-2 z-50 bg-gray">
      <Link to={`/`}>
        <img src={logo} alt="" className="w-12 h-12" />
      </Link>
      <ul className="flex gap-4 justify-center items-center">
        {subscription && (
          <Link className="hover:scale-105 transition-transform" to={`/lives`}>
            Lives
          </Link>
        )}
        {session ? (
          <>
            <div className="max-w-28 overflow-hidden text-ellipsis">
              {subscription && session && <span>✔️</span>}
              {session.user.email}
            </div>
            <div className="flex justify-center items-center gap-2">
              <button onClick={signOut}>
                <CiLogin size={30} />
              </button>
            </div>
          </>
        ) : (
          <>
            <li>
              <Link
                className="hover:scale-105 transition-transform"
                to={`/register`}
              >
                Unirse
              </Link>
            </li>
            <li>
              <Link
                className="hover:scale-105 transition-transform"
                to={`/login`}
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
