import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { contactType } from "../interface/interface";
import Container from "./Container";
import { leftToRight, rightToLeft } from "./Greeting";

const contacts: contactType[] = [
  {
    id: 1,
    logo: "/github.svg",
    link: "sasa",
  },
  {
    id: 2,
    logo: "/gmail.svg",
    link: "dadas",
  },
  {
    id: 3,
    logo: "/facebook.svg",
    link: "dds",
  },
];

const Contact: React.FC = () => {
  return (
    <div className="bg-dark-200" id="contact">
      <Container>
        <div className="text-white py-10 text-center">
          <motion.h1
            className="text-6xl font-bold"
            initial="offscreen"
            whileInView="onscreen"
            variants={leftToRight}
            viewport={{ once: true }}
          >
            Contact
          </motion.h1>

          <motion.div
            className="text-xl font-semibold my-6"
            initial="offscreen"
            whileInView="onscreen"
            variants={rightToLeft}
            viewport={{ once: true }}
          >
            Currently active looking for Frontend Developer Internship
          </motion.div>

          <motion.div
            className="flex justify-center items-center gap-8 my-8"
            initial="offscreen"
            whileInView="onscreen"
            variants={leftToRight}
            viewport={{ once: true }}
          >
            {contacts.map((contact) => {
              return (
                <div key={contact.id} className="cursor-pointer">
                  <Image
                    width={35}
                    height={35}
                    src={contact.logo}
                    alt=""
                    className="text-gray-600"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
