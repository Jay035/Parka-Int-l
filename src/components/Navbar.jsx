import { useState } from "react";
import logo from "../assets/logo.png";

// STYLES
const style = {
  navbar: `nav-menu fixed top-0 z-50 py-4 px-6 flex justify-between items-center w-full bg-white`,
  img: `w-24 md:w-32`,
  menuActive: `right-0 w-full h-screen md:h-fit z-50`,
  menuHidden: `-right-full md:right-0 md:flex`,
  // navMenu: `fixed top-0 md:relative flex justify-between backdrop-blur-sm bg-black/25 md:bg-transparent transition-all`,
  closeBtn: `w-fit h-fit p-[10px] bg-white mt-4 ml-4 transition-opacity rounded-full cursor-pointer hover:opacity-50 md:hidden`,
  closeIcon: `ri-close-line text-5xl`,
  menu: `bg-white w-1/2 md:w-full text-lg font-semibold flex flex-col justify-center gap-5 md:flex-row`,
  navLink: `cursor-pointer pl-4 hover:font-bold`,
  hamburger: `flex flex-col gap-1 cursor-pointer md:hidden`,
  hamburgerLine: `w-6 h-1 bg-black block`
};

export default function Navbar() {
  const [activeState, setActiveState] = useState(false);

  return (
    <nav className={style.navbar}>
      {/* Logo  */}
      <img className={style.img} src={logo} alt="logo" />
      <section
        className={`${
          activeState
            ? style.menuActive
            : style.menuHidden
        } fixed top-0 md:relative flex justify-between backdrop-blur-sm bg-black/25 md:bg-transparent transition-all`}
      >
        {/* close btn */}
        <div
          className={style.closeBtn}
          onClick={() => setActiveState((prevValue) => !prevValue)}
        >
          <i className={style.closeIcon}></i>
        </div>
        {/* menu */}
        <ul className={style.menu}>
          <a
            href="/"
            onClick={() => setActiveState((prevValue) => !prevValue)}
            className={style.navLink}
          >
            Home
          </a>
          <a
            href="#about-us"
            onClick={() => setActiveState((prevValue) => !prevValue)}
            className={style.navLink}
          >
            About Us
          </a>
          <a
            href="#clubs"
            onClick={() => setActiveState((prevValue) => !prevValue)}
            className={style.navLink}
          >
            Our Clubs
          </a>
          <a
            href="#blogs"
            onClick={() => setActiveState((prevValue) => !prevValue)}
            className={style.navLink}
          >
            Blogs
          </a>
          <a
            href="#contact"
            onClick={() => setActiveState((prevValue) => !prevValue)}
            className={style.navLink}
          >
            Contact
          </a>
        </ul>
      </section>
      {/* menu icon */}
      <div
        onClick={() => setActiveState((prevValue) => !prevValue)}
        className={style.hamburger}
      >
        <span className={style.hamburgerLine}></span>
        <span className={style.hamburgerLine}></span>
        <span className={style.hamburgerLine}></span>
      </div>
    </nav>
  );
}
