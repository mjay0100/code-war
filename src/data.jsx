import { AiOutlineArrowRight } from "react-icons/ai";
import image1 from "./assets/images/Photo (1).jpg";
import image2 from "./assets/images/Photo (2).jpg";
import image3 from "./assets/images/Photo (3).jpg";
import project from "./assets/images/project.png";
import project4 from "./assets/images/project4.png";
import project2 from "./assets/images/project2.png";
import project3 from "./assets/images/project3.png";
import blog1 from "./assets/images/blog1.png";
import blog2 from "./assets/images/blog2.png";
import blog3 from "./assets/images/blog3.png";
import professional from "./assets/images/professional.png";
import professional2 from "./assets/images/professional2.jpg";
import professional3 from "./assets/images/professional3.jpg";
import professional4 from "./assets/images/professional4.jpg";
import professional5 from "./assets/images/professional5.jpg";
import professional6 from "./assets/images/professional6.jpg";
import professional7 from "./assets/images/p.jpg";
import professional8 from "./assets/images/p2.jpg";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export const sublinks = [
  {
    id: 1,
    title: "Project Plan",
    body: "There are many variations of the passages of lorem Ipsum from available, majority.",
    link: "Read More ",
    icon: <AiOutlineArrowRight />,
  },
  {
    id: 2,
    title: "Interior Work",
    body: "There are many variations of the passages of lorem Ipsum from available, majority.",
    link: "Read More",
    icon: <AiOutlineArrowRight />,
  },
  {
    id: 3,
    title: "Realization",
    body: "There are many variations of the passages of lorem Ipsum from available, majority.",
    link: "Read More ",
    icon: <AiOutlineArrowRight />,
  },
];

export const people = [
  {
    id: 1,
    name: "Nattasha Mith  ",
    state: "Sydney, USA",
    body: "Lorem Ipsum is simply dummy text of the typesetting industry.Ipsum has been.",
    img: image2,
  },
  {
    id: 2,
    name: "Raymond Galario ",
    state: "Sydney  Australia",
    body: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
    img: image3,
  },
  {
    id: 3,
    name: "Benny Roll ",
    state: "Sydney  New York",
    body: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
    img: image1,
  },
];

export const projects = [
  {
    id: 1,
    type: "Modern Kitchan ",
    deco: "Decor / Artchitecture",
    img: project,
  },
  {
    id: 2,
    type: "Modern Kitchan ",
    deco: "Decor / Artchitecture",
    body: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
    img: project2,
  },
  {
    id: 3,
    type: "Modern Kitchan ",
    deco: "Decor / Artchitecture",
    body: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
    img: project3,
  },
  {
    id: 4,
    type: "Modern Kitchan",
    deco: "Decor / Artchitecture",
    body: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
    img: project4,
  },
];

export const blog = [
  {
    id: 1,
    img: blog3,
    tag: "Kitchen Design",
    body: "Let’s Get Solution For Building Construction Work",
    date: "26 December,2022 ",
    icon: <AiOutlineArrowRight />,
  },
  {
    id: 2,
    img: blog1,
    tag: "Living Design",
    body: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "26 December,2022 ",
    icon: <AiOutlineArrowRight />,
  },
  {
    id: 3,
    img: blog2,
    tag: "Interior Design",
    body: "Best For Any Office & Business Interior Solution",
    date: "26 December,2022 ",
    icon: <AiOutlineArrowRight />,
  },
];

export const links = [
  {
    id: 1,
    title: "Pages",
    sublinks: [
      "abouts us",
      "our projects",
      "our teams",
      "contact us",
      "services",
    ],
  },
  {
    id: 2,
    title: "services",
    sublinks: ["kitchen", "living area", "bathroom", "dinning hall", "bedroom"],
  },
  {
    id: 3,
    title: "contact",
    sublinks: [
      "55 East Birchwood Ave. Brooklyn, New York 11201 contact@interno.com(123) 456 - 7890",
    ],
  },
];

export const professionals = [
  {
    id: 1,

    img: professional,
    name: "John Smith",
    job: "Design, Australia",
    icon: [<FaFacebook />, <FaTwitter />, <FaLinkedin />],
  },
  {
    id: 2,

    img: professional2,
    name: "Natasha Julie",
    job: "Design, Australia",
    icon: [<FaFacebook />, <FaTwitter />, <FaLinkedin />],
  },
  {
    id: 22,

    img: professional3,
    name: "Nora Owen",
    job: "Design, Australia",
    icon: [<FaFacebook />, <FaTwitter />, <FaLinkedin />],
  },
  {
    id: 3,

    img: professional4,
    name: "Sofia Carter",
    job: "Design, Australia",
    icon: [<FaFacebook />, <FaTwitter />, <FaLinkedin />],
  },
  {
    id: 4,

    img: professional5,
    name: "Luna James",
    job: "Design, Australia",
    icon: [<FaFacebook />, <FaTwitter />, <FaLinkedin />],
  },
  {
    id: 5,

    img: professional6,
    name: "Gianna Mataeo",
    job: "Design, Australia",
    icon: [<FaFacebook />, <FaTwitter />, <FaLinkedin />],
  },
  {
    id: 6,

    img: professional7,
    name: "Charlotte Levi",
    job: "Design, Australia",
    icon: [<FaFacebook />, <FaTwitter />, <FaLinkedin />],
  },
  {
    id: 7,

    img: professional8,
    name: "Avery Jackson",
    job: "Design, Australia",
    icon: [<FaFacebook />, <FaTwitter />, <FaLinkedin />],
  },
];
