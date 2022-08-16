import Link from "next/link";
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
    title: "Experience",
    href: "experience",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

const NavBar: React.FC = () => {
  return (
    <div className="bg-dark-100 navbar">
      <Container>
        <nav className="flex justify-between items-center py-2">
          <div className="text-7xl font-medium cursor-pointer text-gradient">
            P.H
          </div>
          <ul className="flex items-center gap-10">
            {links.map((link, id) => {
              return (
                <Link key={id} href={link.href}>
                  <li className="text-sm font-semibold uppercase cursor-pointer text-white">
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
