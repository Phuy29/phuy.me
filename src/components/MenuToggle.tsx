import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

export default function Example() {
  return (
    <div className="md:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <MenuIcon />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-200 dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-800 text-white" : "dark:text-white"
                    } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={700}
                      offset={-100}
                    >
                      About
                    </Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-800 text-white" : "dark:text-white"
                    } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      duration={700}
                      offset={-100}
                    >
                      Projects
                    </Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-800 text-white" : "dark:text-white"
                    } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={700}
                      offset={-100}
                    >
                      Contact
                    </Link>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

const MenuIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="#fff"
      strokeWidth="0"
      viewBox="0 0 20 20"
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
