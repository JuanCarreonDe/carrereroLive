import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
// import { useAuth } from "../../hooks/useAuth";
import { useAuthStore } from "../../stores/useAuthStore";
import { CiLogin } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";

export const Nav = () => {
  const { signOut, session, subscription } = useAuthStore();
  return (
    <nav className="border-b-[1px] border-black fixed left-0 top-0 w-full flex justify-between items-center px-8 py-2 z-[101] bg-primary">
      <Link to={`/`}>
        <img src={logo} alt="" className="h-12 object-contain" />
      </Link>
      <ul className="flex gap-4 justify-center items-center">
        {session ? (
          subscription ? (
            <>
              <span className="max-w-28 w-full flex items-center gap-1 text-neutral-400">
                {subscription && session && <FaCheck size={30} />}
                <span className="max-w-28 text-ellipsis overflow-hidden">
                  {session.user.email}
                </span>
              </span>

              <Link
                className="hover:scale-105 transition-transform"
                to={`/lives`}
              >
                Lives
              </Link>
              <div className="flex justify-center items-center gap-2">
                <button onClick={signOut}>
                  <CiLogin size={30} />
                </button>
              </div>
            </>
          ) : (
            <>
              <span className="max-w-28 w-full flex items-center gap-1 text-neutral-400">
                {subscription && session && <FaCheck size={30} />}
                <span className="max-w-28 text-ellipsis overflow-hidden">
                  {session.user.email}
                </span>
              </span>
              <Link
                className="hover:scale-105 transition-transform"
                to={`/pay`}
              >
                Activar
              </Link>
              <div className="flex justify-center items-center gap-2">
                <button onClick={signOut}>
                  <CiLogin size={30} />
                </button>
              </div>
            </>
          )
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
