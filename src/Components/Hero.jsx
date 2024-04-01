import React, { useState } from "react";
import { ArrowToBottom } from "../icons/ArrowToBottom";
import { Navbar } from "./Navbar";

export const Hero = () => {
  const [showMobileMenu, SetShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => SetShowMobileMenu(!showMobileMenu);

  return (
    <section className="h-screen w-full bg-slate-50 header-image relative flex flex-col items-center">
      <Navbar handleMenu={handleShowMobileMenu} />
      <div className="flex justify-between flex-col items-center h-1/2 pt-14">
        <span className="text-7xl text-slate-50 max-md:text-center max-md:text-6xl font-title font-bold">
          WE ARE CREATIVES
        </span>
        <ArrowToBottom />
      </div>

      <nav
        className={`${
          showMobileMenu ? "opacity-100 " : "opacity-0 invisible "
        } bg-slate-50 absolute w-[80%] top-36 h-[420px] rounded transition-opacity ease-in-out delay-150 duration-300 `}
      >
        <ul className="flex  flex-col justify-evenly items-center p-5 size-full">
          <li>
            <a
              className="  hover:text-secundary-50  hover:font-bold hover:text-xl hover:rounded-full hover:py-3 hover:px-7  hover:bg-primary-100 text-secundary-300 hover:font-title text-xl font-bold"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="   hover:text-secundary-50  hover:font-bold hover:text-xl hover:rounded-full hover:py-3 hover:px-7  hover:bg-primary-100  text-secundary-300 hover:font-title  text-xl font-bold"
              href="#"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className=" hover:text-secundary-50  hover:font-bold hover:text-xl hover:rounded-full hover:py-3 hover:px-7  hover:bg-primary-100 text-secundary-300  hover:font-title text-xl font-bold"
              href="#"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="  hover:text-secundary-50  hover:font-bold hover:text-xl hover:rounded-full hover:py-3 hover:px-7  hover:bg-primary-100 text-secundary-300  hover:font-title text-xl font-bold"
              href="#"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
