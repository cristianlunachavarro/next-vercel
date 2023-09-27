import Link from "next/link";
import React from "react";
import styles from "./NavBar.module.css";
import ActiveLink from "../ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const NavBar = () => {
  return (
    <div className={styles["menu-container"]}>
      {menuItems.map(({ href, text }, index) => (
        <ActiveLink key={index} href={href} text={text} />
      ))}
    </div>
  );
};

export default NavBar;
