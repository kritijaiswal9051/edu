import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu-icon.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "mobile-hide-menu"}>
        <li>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="program"
            spy={true}
            smooth={true}
            offset={-260}
            duration={500}
          >
            Program
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="campus"
            spy={true}
            smooth={true}
            offset={-260}
            duration={500}
          >
            Campus
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-260}
            duration={500}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
