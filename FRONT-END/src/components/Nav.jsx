import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        to="/">
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        to="/reyes/atanagildo">
        Atanagildo
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        to="/reyes/ervigio">
        Ervigio
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        to="/reyes/leogivildo">
        Leogivildo
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        to="/reyes/recesvinto">
        Recesvinto
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        to="/reyes/sisebuto">
        Sisebuto
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : null)}
        to="/reyes/teodorico">
        Teodorico
      </NavLink>
    </nav>
  );
};
export default Nav;
