import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";
import { motion, Variants } from "framer-motion";

export const leftToRight: Variants = {
  offscreen: {
    x: -300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.2,
    },
  },
};

export const rightToLeft: Variants = {
  offscreen: {
    x: 300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.2,
    },
  },
};

const Greeting: React.FC = () => {
  return (
    <div className="px-8" id="greeting">
      <Container>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-7 pt-5">
          <motion.div
            className="flex-1"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={leftToRight}
          >
            <h1 className="text-2xl md:text-[4.5rem] font-bold md:font-black dark:text-white leading-tight">
              Xin chào, tôi là Phúc Huy
            </h1>
            <p className="text-lg md:text-4xl font-normal md:font-medium pt-6 pb-8 dark:text-white">
              Tôi làm{" "}
              <span className="text-xl md:text-4xl text-gradient text">
                Web Developer
              </span>
            </p>
            <Link href="">
              <div className="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 p-1 rounded-xl cursor-pointer hover:opacity-60 duration-100">
                <a
                  target="_blank"
                  className="inline-block text-lg md:text-2xl font-semibold px-4 py-3 bg-white dark:bg-dark-100 dark:text-white rounded-lg"
                >
                  <span>My resume</span>{" "}
                  <span className="text-gradient">{">"}</span>
                </a>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={rightToLeft}
            viewport={{ once: true }}
            className="flex"
          >
            <Image width="510px" height="650px" src="/phuy.png" alt="" />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Greeting;
