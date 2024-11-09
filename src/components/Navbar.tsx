"use client";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      id="nav"
      className="mb-12 absolute flex justify-between items-center w-full gap-x-12 py-6 px-4"
    >
      <h1 className="text-white">PARKA TRAVELS</h1>

      <section
        className={`${
          menuOpen
            ? `left-0 pt-8 gap-6 opacity-100 z-40 ease-out lg:pt-0 transition-all duration-100 delay-75`
            : `-left-full opacity-0 lg:opacity-100 lg:left-0 transition-all duration-100 delay-75`
        } absolute  -tracking-[0.02em] top-0 bg-black/90 lg:bg-transparent lg:relative h-screen lg:h-fit w-full lg:w-fit ease-in-out flex flex-col justify-center gap-10 lg:flex-row lg:gap-12 lg:justify-between items-center text-lg md:text-2xl`}
      >
        ''
        <button
          className=" text-white"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen((prevState) => !prevState);
          }}
        >
          SERVICES
        </button>

        
      </section>

      {/* Hamburger (menu) icon */}
      <div
        className="z-50 w-fit flex flex-col gap-1 items-center cursor-pointer lg:hidden"
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen((prevState) => !prevState);
        }}
      >
        <span
          className={`w-8 h-[3px] bg-white block rounded-lg transition-all duration-150 delay-75 ${
            menuOpen ? `rotate-[45deg] translate-y-4 w-7` : ``
          }`}
        ></span>
        <span
          className={`w-8 h-[3px] bg-white block rounded-lg transition-all duration-150 ${
            menuOpen ? `hidden` : ``
          }`}
        ></span>
        <span
          className={`w-8 h-[3px] bg-white block rounded-lg transition-all duration-150 delay-75 ${
            menuOpen ? `rotate-[495deg] translate-y-[10px] w-7` : ``
          }`}
        ></span>
      </div>
    </nav>
  );
}

