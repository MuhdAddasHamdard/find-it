import React, { useState } from "react";
import { mainLinks, actionLinks } from "../../mock";
import { VscClose } from "react-icons/vsc";
import { HiMenuAlt4 } from "react-icons/hi";
const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div>
      <header className="w-full relative flex  justify-between items-center gap-10  py-6 shadow-md">
        <div className="flex items-center gap-9 px-5  w-full justify-between">
          <img
            src="https://framerusercontent.com/images/uqOqjhGMi4m1U97lTIFNIw6rBaU.svg?width=126&height=41"
            alt="Logo"
            className="h-8 "
          />
          <div className="lg:flex hidden lg:justify-between w-full">
            <nav>
              <ul className="flex gap-6">
                {mainLinks.map((link) => {
                  return (
                    <li key={link.name}>
                      <a
                        className="text-gray-600 hover:text-black hover:underline transition"
                        href={link.path}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <nav>
              <ul className="flex gap-5">
                {actionLinks.map((link) => {
                  return (
                    <li key={link.name}>
                      <a
                        className={
                          link.name === "Contact us"
                            ? `bg-black rounded-full text-white px-3 p-2`
                            : "rounded-full border  p-2 px-3 "
                        }
                        href={link.path}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          {/* mobile menu */}
          <button
            className="lg:hidden text-4xl"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            {isOpen ? <VscClose /> : <HiMenuAlt4 />}
          </button>
          {/* mobile menu */}
          {isOpen && (
            <div className="absolute bg-slate-300 top-20 rounded-2xl   p-3 right-3.5 left-3.5  ">
              <nav>
                <ul className="flex flex-col gap-6">
                  {mainLinks.map((link) => (
                    <li key={link.name}>
                      <a className="" href={link.path}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="flex gap-4 mt-5">
                  {actionLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        className={
                          link.name === "Contact us"
                            ? `bg-black rounded-full text-white px-3 p-2`
                            : "rounded-full border  p-2 px-3 "
                        }
                        href={link.path}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
