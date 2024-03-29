import { useState } from "react";
import { close, mainLogo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <div className="flex">
          <img src={mainLogo} alt="logo" className="h-[50px] " />
          <h2 className="text-white font-bold text-[35px] ">FlexiPay</h2>
        </div>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`fonts-poppins cursor-pointer text-[16px] 
          ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute 
          top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-center flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`fonts-poppins cursor-pointer text-[16px] 
          ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
