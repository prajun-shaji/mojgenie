import { Menu } from "@mui/icons-material";
import { logoImg } from "../assets/index.js";
import { navLinks } from "../constants/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between">
      <a href="/">
        <img
          src={logoImg}
          className="size-auto cursor-pointer object-contain"
          alt="logo"
        />
      </a>
      <div>
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map(({ link, url }) => (
            <Link to={url} key={link} className="cursor-pointer capitalize">
              {link}
            </Link>
          ))}
        </div>
        <div className="flex border border-gray-300 p-2 text-gray-400 lg:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
