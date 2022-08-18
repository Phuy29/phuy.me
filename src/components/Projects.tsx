import React from "react";
import { projectType, languageType } from "../interface/interface";
import Container from "./Container";

import { motion, Variants } from "framer-motion";
import { leftToRight } from "./Greeting";
import Image from "next/image";
import Link from "next/link";

interface projectsProps {
  projects: projectType[];
}

const projectVariant: Variants = {
  offscreen: {
    y: "300",
  },
  onscreen: {
    y: "0",
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const Projects: React.FC<projectsProps> = (props) => {
  const { projects } = props;
  return (
    <div className="bg-dark-300 px-8" id="projects">
      <Container>
        <div className="py-10 text-white">
          <motion.div
            className="text-4xl md:text-6xl font-bold text-center mb-10"
            initial="offscreen"
            whileInView="onscreen"
            variants={leftToRight}
            viewport={{ once: true }}
          >
            Projects
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project) => {
              return (
                <div key={project.id}>
                  <Project
                    img={project.img}
                    link={project.link}
                    title={project.title}
                    languages={project.languages}
                    description={project.description}
                  />
                </div>
              );
            })}
          </div>

          <Link href="https://github.com/Phuy29">
            <a target="_blank">
              <div className="text-center font-medium text-xl mt-10 mb-4 cursor-pointer underline">
                See more on github
              </div>
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
};

interface projectProps {
  img: string;
  link: string;
  title: string;
  languages: languageType[];
  description: string;
}

const Project: React.FC<projectProps> = (props) => {
  const { img, link, title, languages, description } = props;
  return (
    <Link href={link}>
      <a target="_blank">
        <motion.div
          className="mt-10 bg-dark-100 text-white h-[500px] flex flex-col justify-between cursor-pointer"
          initial="offscreen"
          whileInView="onscreen"
          variants={projectVariant}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        >
          <Image width={625} height={324} src={img} alt="" className="w-full" />
          <div className="p-4 flex-1">
            <h2 className="text-2xl font-medium my-2">{title}</h2>
            <div className="flex gap-4 items-center py-2">
              {languages.map((language, id) => {
                return (
                  <div
                    key={id}
                    className="flex items-center bg-white rounded-lg text-black p-1"
                  >
                    <Image width={20} height={20} src={language.icon} alt="" />
                    <p className="ml-1">{language.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="my-2">{description}</div>
          </div>
          <div className="w-full py-2 text-center bg-slate-600">
            View in github
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

export default Projects;
