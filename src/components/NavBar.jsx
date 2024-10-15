import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { ON_LOGOUT } from "../store/authenticationSlice";

function NavBar() {
  const isLogin = useSelector((state) => state.authentication.isLogin);
  const currentLoginUser = JSON.parse(localStorage.getItem("currentLoginUser"));
  const dispatch = useDispatch();

  function handleLogout() {
    localStorage.removeItem("currentLoginUser");
    dispatch(ON_LOGOUT());
  }

  return (
    <header className="container mx-auto">
      <nav className="px-2 py-7 text-lg text-black">
        <ul className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-0">
          <div className="flex items-center gap-4">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Shop
              </NavLink>
            </li>
          </div>

          <Link to={"/"}>
            <h1 className="text-2xl tracking-wider">BOUTIQUE</h1>
          </Link>

          <div className="flex items-center gap-4">
            <li className="flex items-center gap-1">
              <i className="fa-solid fa-cart-flatbed text-gray-400"></i>
              <NavLink
                to={"/cart"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Cart
              </NavLink>
            </li>
            <li className="flex items-center gap-1">
              <i className="fa-solid fa-user text-gray-400"></i>
              <NavLink
                to={"/login"}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={(e) => {
                  // prevent change route to sign in page when already login
                  if (isLogin) {
                    e.preventDefault();
                  }
                }}
              >
                {isLogin ? currentLoginUser.fullName : "Login"}
              </NavLink>
              {isLogin && (
                <button className="ml-1 mt-1 text-sm" onClick={handleLogout}>
                  (Logout)
                </button>
              )}
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;
