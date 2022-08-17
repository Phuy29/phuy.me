import Image from "next/image";
import React from "react";
import { info } from "../interface/interface";
import Container from "./Container";

import { motion } from "framer-motion";
import { leftToRight } from "./Greeting";

const informations: info[] = [
  {
    title: "Học vấn",
    content: "FPT Polytechnic",
  },
  {
    title: "Điện thoại",
    content: "0987336561",
  },
  {
    title: "Email",
    content: "phuchuy292003@gmail.com",
  },
  {
    title: "Địa chỉ",
    content: "Thanh Trì - Hà Nội",
  },
  {
    title: "Website",
    content: "phuy.me",
  },
  {
    title: "Nghề nghiệp",
    content: "Web developer",
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-dark-200" id="about">
      <Container>
        <div className="py-20">
          <motion.div
            className="p-10 flex items-center justify-between gap-6 main-info "
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={leftToRight}
          >
            <div className="flex border-4 border-white">
              <Image
                width="300"
                height="300"
                src="/phuy-about.jpeg"
                alt=""
                className="object-cover"
              />
            </div>

            <div className="flex-1 text-white">
              <div className="pb-4 border-b border-gray-500">
                <h2 className="text-3xl font-bold my-4">Một chút về tôi</h2>
                <p>Info...</p>
              </div>

              <div className="py-3">
                <h1 className="text-xl font-bold capitalize my-4">
                  Thông tin cơ bản
                </h1>
                <ul className="grid grid-cols-2 gap-y-2">
                  {informations.map((info, id) => {
                    return (
                      <li key={id}>
                        <span className="w-28 inline-block">{info.title}:</span>
                        <span>{info.content}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default About;
