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

const Home: NextPage = ({
  projectsData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
        <link rel="icon" href="/phuy.png" />
      </Head>
      <div className="bg-dark-100">
        <NavBar />
        <Greeting />
        <About />
        <Projects projects={projectsData} />
        <Contact />
        <Footer />
      </div>
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
