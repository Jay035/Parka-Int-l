import { useState } from "react";
import { Link} from 'react-router-dom';
import logo from "../assets/logo.png";

// STYLES
const style = {
  // navbar: `py-4 flex justify-between items-center w-full`,
  // menu: `fixed right-0 top-0 w-full h-screen flex justify-between backdrop-blur-sm bg-black/25 transition-all`,
  // closeBtn: `w-fit h-fit p-[10px] bg-white mt-4 ml-4 transition-opacity rounded-full cursor-pointer hover:opacity-50`,
  // menuContainer: `bg-white w-1/2 text-lg font-semibold flex flex-col justify-center gap-5`,
  // menuItem: `cursor-pointer pl-4`,
  // hamburger: `flex flex-col gap-1 cursor-pointer md:hidden`,
  // menuHidden: `hidden lg:flex`,
};

export default function Navbar() {
  const [activeState, setActiveState] = useState(false);

  return (
    <nav className="nav-menu fixed top-0 z-50 py-4 px-6 flex justify-between items-center w-full bg-white">
      {/* Logo  */}
      {/* <section className=""> */}
        <img className="w-24 md:w-32" src={logo} alt="logo" />
      {/* </section> */}
      <section className={`${activeState ?  `right-0 w-full h-screen z-50` : `-right-full md:right-0 md:flex`} fixed top-0 md:relative flex justify-between backdrop-blur-sm bg-black/25 md:bg-transparent transition-all`}>
        {/* close btn */}
        <div
          className="w-fit h-fit p-[10px] bg-white mt-4 ml-4 transition-opacity rounded-full cursor-pointer hover:opacity-50 md:hidden"
          onClick={() => setActiveState((prevValue) => !prevValue)}
        >
          <i className="ri-close-line text-5xl"></i>
        </div>
        {/* menu */}
        <ul className="bg-white w-1/2 md:w-full text-lg font-semibold flex flex-col justify-center gap-5 md:flex-row">
          <a href="/" onClick={() => setActiveState((prevValue) => !prevValue)} className="cursor-pointer pl-4 hover:font-bold">Home</a>
          <a href="#about-us" onClick={() => setActiveState((prevValue) => !prevValue)} className="cursor-pointer pl-4 hover:font-bold">About Us</a>
          <a href="#clubs" onClick={() => setActiveState((prevValue) => !prevValue)} className="cursor-pointer pl-4 hover:font-bold">Our Clubs</a>
          <a href="#blogs" onClick={() => setActiveState((prevValue) => !prevValue)} className="cursor-pointer pl-4 hover:font-bold">Blogs</a>
          <a href="#contact" onClick={() => setActiveState((prevValue) => !prevValue)} className="cursor-pointer pl-4 hover:font-bold">Contact</a>
        </ul>
      </section>
      {/* menu icon */}
      <div
        onClick={() => setActiveState((prevValue) => !prevValue)}
        className="flex flex-col gap-1 cursor-pointer md:hidden"
      >
        <span className="w-6 h-1 bg-black block"></span>
        <span className="w-6 h-1 bg-black block"></span>
        <span className="w-6 h-1 bg-black block"></span>
      </div>
    </nav>
  );
}
