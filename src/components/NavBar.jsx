import { useState } from "react";
import Menu from "./Menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="nav">
      <div className="logo">
        <a href="#home">Logo</a>
      </div>
      <ul className="desktop_navbar">
        <Menu />
      </ul>
      <ul className="mobile_navbar">
        <li>
          <button  className={`menu-button ${showMenu ? 'active' : ''}`} onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <GrClose /> : <GiHamburgerMenu />}
          </button>
        </li>
        {showMenu && <Menu />}
      </ul>
      <div className="contact">
        <a href="#contact">Contact Us</a>
      </div>
    </nav>
  );
};
export default NavBar;
