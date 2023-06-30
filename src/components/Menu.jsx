import { NavHashLink } from "react-router-hash-link";
const Menu = () => {
  return (
    <div className="menu">
      {" "}
      <li>
        <NavHashLink smooth to="#home">
          Home
        </NavHashLink>
      </li>
      <li>
        <NavHashLink smooth to="#about">
          About
        </NavHashLink>
      </li>
      <li>
        <NavHashLink smooth to="#products">
          Products
        </NavHashLink>
      </li>
      <li>
        <NavHashLink smooth to="#contact">
          Contact{" "}
        </NavHashLink>
      </li>
    </div>
  );
};
export default Menu;
