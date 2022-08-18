import React from "react";

import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import { navLink } from "../interface/interface";
import Container from "./Container";
import MenuToggle from "./MenuToggle";

const links: navLink[] = [
  {
    title: "About",
    href: "about",
  },
  {
    title: "Projects",
    href: "projects",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

const NavBar: React.FC = () => {
  return (
    <div className="sticky backdrop-blur-lg z-10 top-0 px-8">
      <Container>
        <nav className="flex justify-between items-center py-5">
          <div className="text-5xl md:text-7xl font-medium cursor-pointer text-gradient">
            <Link
              to="greeting"
              spy={true}
              smooth={true}
              duration={700}
              offset={-100}
            >
              P.H
            </Link>
          </div>
          <MenuToggle />
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link, id) => {
              return (
                <Link
                  key={id}
                  to={link.href}
                  spy={true}
                  smooth={true}
                  duration={700}
                  offset={-100}
                >
                  <li className="text-base font-semibold uppercase cursor-pointer text-white hover:text-blue-400">
                    {link.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
