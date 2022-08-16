import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";

const Greeting: React.FC = () => {
  return (
    <div className="bg-dark-100">
      <Container>
        <div className="flex justify-between items-center pt-3">
          <div className="flex-1">
            <h1 className="text-7xl font-black text-white leading-tight">
              Xin chào, tôi là Phúc Huy
            </h1>
            <p className="text-3xl font-medium py-10 text-white">
              Tôi làm{" "}
              <span className="text-4xl text-gradient">Web Developer</span>
            </p>
            <Link href="">
              <a
                target="_blank"
                className="text-2xl font-medium px-4 py-2 bg-gray-400 text-white rounded-lg"
              >
                My resume
              </a>
            </Link>
          </div>
          <Image width="510px" height="650px" src="/phuy.png" alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Greeting;
