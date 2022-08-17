import { projectType } from "../../../interface/interface";

export const projects: projectType[] = [
  {
    id: 1,
    img: "/chat-app.png",
    link: "dsdda",
    title: "Realtime Chat Application",
    languages: [
      {
        name: "HTML",
        icon: "/html.svg",
      },
      {
        name: "CSS",
        icon: "/css.svg",
      },
      {
        name: "Firebase",
        icon: "/firebase.svg",
      },
    ],
    description:
      "Chat app with social authentication using Firebase, great design, and real-time chat, the ability to create multiple rooms, and much more.",
  },
  {
    id: 2,
    img: "/crypto-search.png",
    title: "Crypto Search Website",
    link: "sadsd",
    languages: [
      {
        name: "React",
        icon: "/react.svg",
      },
    ],
    description:
      "Crypto Search Website helps us search information of current crypto including rank, price, market cap, volume 24h. ",
  },
  {
    id: 3,
    img: "/hades-shop.png",
    title: "Hades shop",
    link: "sasa",
    languages: [
      {
        name: "React",
        icon: "/react.svg",
      },
    ],
    description:
      "Hades shop is inspired by the website of the hades brand. Hades shop is e-commerce website, using React.js. ",
  },
];
