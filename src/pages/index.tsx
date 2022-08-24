import axios from "axios";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Greeting from "../components/Greeting";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import { Link } from "react-scroll";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Home: NextPage = ({
  projectsData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { setTheme } = useTheme();
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    setTheme("dark");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollY == 0 ? setScrollToTop(false) : setScrollToTop(true);
    };
    window.addEventListener("scroll", handleScrollToTop);

    return () => {
      window.removeEventListener("scroll", handleScrollToTop);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Phuy</title>
        <meta property="og:title" content="Phuy" key="title" />
        <meta property="og:url" content="https://phuy.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Front-end developer, Web developer."
        />
        <meta property="og:image" content="/phuy.png" />
        <link rel="icon" href="/phuy_logo.png" />
        <link rel="apple-touch-icon" href="/phuy_logo.png" />
      </Head>
      <div className="bg-gray-50 dark:bg-dark-100">
        <NavBar />
        <Greeting />
        <About />
        <Projects projects={projectsData} />
        <Contact />
        <Footer />
      </div>
      {scrollToTop && (
        <Link
          className="fixed right-5 bottom-5 bg-gray-400 dark:bg-gray-600 p-3 hover:bg-blue-600 dark:hover:bg-blue-600 duration-300 rounded-md"
          to="greeting"
          duration={500}
          spy={true}
          smooth={true}
          offset={-200}
        >
          <svg
            stroke="currentColor"
            fill="#fff"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.3em"
            width="1.3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 15h14l-7-8z"></path>
          </svg>
        </Link>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await axios.get(`${process.env.API_URL}/api/projects`);
  return {
    props: {
      projectsData: projects.data,
    },
  };
};

export default Home;
