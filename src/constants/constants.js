import {
  bu,
  customImg,
  designImg,
  devImg,
  em,
  inI,
  liveImg,
  loc,
  mobileImg,
  mobl,
  ph,
  planImg,
  pp,
  prod,
  productImg,
  ser,
  serverImg,
  tra,
  vision,
} from "../assets/index.js";

export const navLinks = [
  { link: "home", url: "/" },
  { link: "services", url: "/services" },
  { link: "product" },
  { link: "technology" },
  { link: "process" },
  { link: "about", url: "/about" },
  { link: "career", url: "/career" },
  { link: "contact", url: "/contact" },
];

export const services = [
  {
    image: mobileImg,
    title: "Mobile app Development",
    desc: "We are experienced mobile app development company with versatile products",
  },
  {
    image: customImg,
    title: "Custom Software Development",
    desc: "We bring versatile custom softwares as per expectation with our innovations",
  },
  {
    image: serverImg,
    title: "Server Management",
    desc: "Accelerate your cloud operations by minimizing costs and with high efficiency",
  },
  {
    image: productImg,
    title: "Product Design",
    desc: "We help you to design an idea to a market friendly and profitable product",
  },
];

export const process = [
  {
    image: planImg,
    title: "Planning",
    desc: "Our team examines your requirements and expectations, takes account of your needs, and creates a preliminary plan for your approval.",
  },
  {
    image: designImg,
    title: "Designing",
    desc: "Everything from an efficient framework to an easy-to-use interface is drawn up, examined, evaluated, and approved during the design phase.",
  },
  {
    image: devImg,
    title: "Development",
    desc: "Our architect, coders, designers, and development management team get hard to work ensuring that your software is as efficient as possible.",
  },
  {
    image: liveImg,
    title: "Live",
    desc: "With your approval, the software is delivered to the environment you need. All rights to the custom solution are transferred to you.",
  },
];

export const contacts = [
  {
    icon: loc,
    text: [
      "KSITIL Special Economic Zone",
      "Sahya building, Govt Cyber Park,",
      "Nellikode (PO), Calicut – 673016,",
      "Kerala, India",
    ],
  },
  {
    icon: ph,
    text: ["Call us now :", "+91 83019 91502"],
  },
  { icon: em, text: ["info@mojgenie.com"] },
];

export const vacc = [
  {
    title: "React Developer",
    exp: "1+ year Experienced",
  },
  {
    title: "Laravel Developer",
    exp: "1+ year Experienced",
  },
  {
    title: "Full Stack",
    exp: "1+ year Experienced",
  },
  {
    title: "Software Tester",
    exp: "Interns/1 year Experienced",
  },
];

export const about = [
  {
    icon: tra,
    title: "Transparency",
    desc: "We won’t tip-toe around a client’s idea if we think it’s a goner. Instead, we’ll provide a detailed explanation as to why it doesn’t work and how it could be done better. Tough love!",
  },
  {
    icon: bu,
    title: "Business success",
    desc: "We seek out and utilize the latest technology to create better, more effective solutions. This gives our clients an unparalleled competitive advantage.",
  },
  {
    icon: inI,
    title: "Innovation",
    desc: "At Mojgenie, it’s not about writing the code: it’s about delivering an effective solution that brings business value to our clients as well as their future customers.",
  },
  {
    icon: pp,
    title: "People growth",
    desc: "At Mojgenie, it’s not about the company, it’s about the people. We encourage their personal growth, competence development, and overall satisfaction.",
  },
];

export const service = [
  {
    icon: mobl,
    title: "Mobile App Development",
    text: "Mojgenie is an experienced mobile app development company that has proven experience in delivering successful mobile apps across the globe. We provide a full-stack mobile application development service in your budget and as per the stipulated timeframe. From architecting ideas to final deployment on play store/app store, we ensure to smoothen up the lifecycle process. Whether you want to build a native app or hybrid app, our mobile app team can develop a cutting-edge solution as per your requirements. We never compromise with the quality and focus hard on maximizing performance using intuitive UI/UX design to provide the best mobile experience.",
    rev: false,
  },
  {
    icon: vision,
    title: "Custom Software Development",
    text: "Mojgenie provides an enterprise-grade software solution to enable digital transformation. We offers top-notch qualitative service by developing robust, secured, and high-performing software solution that provides the best user experience. Having years of experience in the custom software development arena, we have got expertise in building complex solutions as per the changing needs of the business. With the use of cutting-edge technology and the latest market trends, our software development team can craft a fully functional and feature-rich solution for businesses to drive growth effectively.",
    rev: true,
  },
  {
    icon: ser,
    title: "Server Managment",
    text: "Want to deliver the application faster while increasing the uptime of the server? We at Mojgenie can provide you full-fledged cloud and DevOps solutions for your business which can increase agility, time-to-market, and drive efficiency. We have years of expertise in creating a robust application that helps to streamline and automate business processes and operations. Our expert team uses enhanced applications and tools that can provide faster performance, enhanced security, and improve the business experience. Our cloud and DevOps team strive hard to deliver industry-focused technology solutions across the globe by meeting unique challenges.",
    rev: false,
  },
  {
    icon: prod,
    title: "Product Design",
    text: "A 5 Stage Process to Better Product Design. At its core, design thinking is a problem-solving methodology that, first and foremost, focuses on the user’s needs rather than the product’s specifications. Teams that fuse design thinking into their design process can develop better, user-centered products",
    list: [
      "Empathise",
      "Defining the problem",
      "Solid understanding",
      "Experimentation",
      "Testing",
    ],
    rev: true,
  },
];
