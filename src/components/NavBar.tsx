import React from "react";

import { navLink } from "../interface/interface";
import Container from "./Container";

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
    <div className="navbar">
      <Container>
        <nav className="flex justify-between items-center py-2">
          <div className="text-7xl font-medium cursor-pointer text-gradient">
            <a href="#">P.H</a>
          </div>
          <ul className="flex items-center gap-10">
            {links.map((link, id) => {
              return (
                <a key={id} href={`#${link.href}`}>
                  <li className="text-base font-semibold uppercase cursor-pointer text-white hover:text-blue-400">
                    {link.title}
                  </li>
                </a>
              );
            })}
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
