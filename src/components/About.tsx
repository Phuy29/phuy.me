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
    content: "https://phuy.vercel.app",
  },
  {
    title: "Nghề nghiệp",
    content: "Web developer",
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-200 px-8" id="about">
      <Container>
        <div className="py-8 dark:text-white">
          <motion.div
            className="text-4xl md:text-6xl font-bold text-center mb-10"
            initial="offscreen"
            whileInView="onscreen"
            variants={leftToRight}
            viewport={{ once: true }}
          >
            About
          </motion.div>

          <div className="pt-3 pb-20">
            <motion.div
              className="p-1 bg-gradient-to-r from-[#00cc99] via-[#00cc99] to-[#6600ff]"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={leftToRight}
            >
              <div className="p-7 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white dark:bg-dark-200">
                <div className="flex border-8 border-gray-200 dark:border-white">
                  <Image
                    width="350"
                    height="350"
                    src="/phuy-about.jpeg"
                    alt=""
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 ">
                  <div className="pb-4 border-b border-gray-500">
                    <h2 className="text-3xl font-bold my-3">Một chút về tôi</h2>
                    <p>
                      Hiện tại, mình đang là sinh viên kì 4 tại trường FPT
                      Polytechnic. Mình bắt đầu học lập trình từ tháng 10 năm
                      ngoái và phần lớn thời gian trong ngày mình đều ngồi học
                      code. Ngoài việc học tập trên trường thì mình thường xuyên
                      học thêm trên F8 Fullstack và trên các kênh Youtube như
                      evondev, easy frontend, ...
                    </p>
                    <p className="pt-2">
                      Mình thực sự thích code và thử thách bản thân học được
                      nhiều cái mới vào mỗi ngày mới. Mục tiêu hiện tại của mình
                      là trở thành một lập trình viên Frontend.
                    </p>
                  </div>

                  <div className="py-3">
                    <h1 className="text-xl font-bold capitalize my-4">
                      Thông tin cơ bản
                    </h1>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                      {informations.map((info, id) => {
                        return (
                          <li key={id}>
                            <span className="w-[110px] inline-block">
                              {info.title}:
                            </span>
                            <span>{info.content}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
