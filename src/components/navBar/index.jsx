import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT",
    to: "/about",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
];
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          <Link to={"/"} className="navbar_container_logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar_container_menu ${toggle ? "active" : ""}`}>
          {data.map((item, key) => {
            return (
              <li key={key} className="navbar_container_menu_item">
                <Link className="navbar_container_menu_item_links" to={item.to}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="nav-icons" onClick={handleToggle}>
          {toggle ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;