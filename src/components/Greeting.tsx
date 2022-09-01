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
            <h1 className="text-2xl md:text-[4.5rem] font-bold md:font-extrabold dark:text-white leading-tight">
              Xin chào, tôi là Phúc Huy
            </h1>
            <div className="font-normal md:font-medium dark:text-white my-4 flex items-center">
              <span className="text-xl md:text-4xl">Tôi làm</span>
              <span className="text-2xl md:text-5xl font-bold ml-2 inline-block max-w-[140px] md:max-w-[360px] text">
                Web Developer
              </span>
            </div>

            <div className="inline-block mt-5 bg-gradient-to-r from-sky-500 to-indigo-500 p-1 rounded-xl cursor-pointer hover:opacity-60 duration-100">
              <Link href="https://drive.google.com/file/d/19oG-f6TAxA2zKYw8EwegfZI8EY5geMzW/view">
                <a
                  target="_blank"
                  className="inline-block text-lg md:text-2xl font-semibold px-4 py-3 bg-white dark:bg-dark-100 dark:text-white rounded-lg"
                >
                  <span>My resume</span>{" "}
                  <span className="text-gradient">{">"}</span>
                </a>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={rightToLeft}
            viewport={{ once: true }}
            className="flex"
          >
            <Image
              width="510px"
              height="650px"
              src="/phuy.png"
              alt=""
              priority={true}
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Greeting;
