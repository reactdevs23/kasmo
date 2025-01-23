import React, { useState, useEffect } from "react";

import { IoMdClose } from "react-icons/io";

import { AiOutlineAlignRight } from "react-icons/ai";
import classes from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

import { Button } from "components/common";
import {
  developerIcon,
  extentionIcon,
  featuresIcon,
  logo,
  pagesIcon,
  proIcon,
} from "images";

import clsx from "clsx";

const Navbar = ({ primitive950 }) => {
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { icon: extentionIcon, navItem: "Extension", to: "/" },
    { icon: featuresIcon, navItem: "Features", to: "/" },
    { icon: proIcon, navItem: "Pro", isNew: true, to: "/" },
    { icon: developerIcon, navItem: "Developer", to: "/" },
    { icon: pagesIcon, navItem: "Pages", to: "/" },
  ];
  return (
    <>
      <div
        className={clsx(
          primitive950 && classes.primitive950,
          classes.wrapper,
          isScrolled && classes.wrapperBg
        )}
      >
        <header className={clsx(classes.header, "container")}>
          <Link to="/" onClick={() => setSidebar((prev) => !prev)}>
            <img src={logo} alt="#" className={classes.logo} />
          </Link>
          <div className={clsx(classes.navItems, sidebar && classes.sidebar)}>
            {navItems?.map((el, i) => (
              <NavLink
                key={i}
                to={el.to}
                onClick={() => setSidebar(false)}
                className={({ isActive }) =>
                  isActive
                    ? clsx(classes.navItem, classes.navActive)
                    : clsx(classes.navItem)
                }
              >
                <img
                  src={el.icon}
                  alt={el.navItem}
                  className={classes.navIcon}
                />
                {el.navItem}
                {el.isNew && <span className={classes.new}>New</span>}
              </NavLink>
            ))}
          </div>{" "}
          <div className={classes.buttonContainer}>
            <Button className={classes.button}>Download App</Button>
            {sidebar ? (
              <IoMdClose
                className={classes.icon}
                onClick={() => setSidebar((prev) => !prev)}
              />
            ) : (
              <AiOutlineAlignRight
                className={clsx(classes.icon, classes.hamburger)}
                onClick={() => setSidebar((prev) => !prev)}
              />
            )}
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
