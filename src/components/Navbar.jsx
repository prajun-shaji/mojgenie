import { Menu } from "@mui/icons-material";
import { logoImg } from "../assets/index.js";
import { navLinks } from "../constants/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="relative flex items-center justify-between">
      <a href="/">
        <img
          src={logoImg}
          className="size-auto cursor-pointer object-contain"
          alt="logo"
        />
      </a>
      <div>
        <div
          className={`${showMenu ? "absolute -right-8 top-10 flex w-screen flex-col gap-5 bg-white p-5  shadow-lg" : "hidden"} justify-center gap-6 lg:flex`}
        >
          {navLinks.map(({ link, url }) => (
            <Link
              to={url}
              key={link}
              className="cursor-pointer capitalize"
              onClick={() => setShowMenu(false)}
            >
              {link}
            </Link>
          ))}
        </div>
        <div
          className="flex cursor-pointer border border-gray-300 p-2 text-gray-400 lg:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
