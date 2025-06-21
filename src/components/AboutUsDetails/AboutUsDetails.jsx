import React from "react";
import "./AboutUsDetails.css";
import profilePic from "../../assets/pro1.jpg";
import { IoMdPerson } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { MdAddCall, MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import reactJS from "../../assets/react.png";
import nextJS from "../../assets/nextjs.png";
import nodeJS from "../../assets/node.png";
import expresJS from "../../assets/express.png";
import mongodb from "../../assets/mongodb.png";
import mongoose from "../../assets/mongoose.png";
import mysql from "../../assets/mysql.png";
import JavaSc from "../../assets/js.png";
import python from "../../assets/python.jpg";
import redux from "../../assets/redux.png";
import vps from "../../assets/vps.jpg";
import vercel from "../../assets/vercel.png";
import netlify from "../../assets/netlify.png";
import firebase from "../../assets/firebase.png";
const AboutUsDetails = () => {
  const services = [
    "Full-Stack Web Application Development (React, Node.js, Express, MongoDB)",
    "Responsive Frontend UI Design with React.js & Tailwind CSS",
    "RESTful API Development and Integration",
    "User Authentication & Authorization (JWT, Bcrypt)",
    "Admin Dashboard & Role-Based Access Control System",
    "MongoDB Database Design and Management",
    "MySQL Database Design and Management",
    "File & Image Upload System (Multer / Cloudinary)",
    "Payment Gateway Integration (SSLCommerz, Stripe, PayPal)",
    "Real-time Features with Socket.io (Chat, Notifications)",
    "Deployment & Hosting on Vercel, Netlify, or VPS",
  ];
  const skills = [
    reactJS,
    nextJS,
    nodeJS,
    expresJS,
    mongodb,
    mongoose,
    mysql,
    JavaSc,
    python,
    redux,
    vps,
    vercel,
    netlify,
    firebase,
  ];
  const info = [
    {
      icon: <IoMdPerson />,
      text: "Sultan Mahmud",
    },
    {
      icon: <CiCalendarDate />,
      text: "01 June, 2002",
    },
    {
      icon: <IoLocation />,
      text: "Rajshahi, Bangladesh",
      link: "https://maps.app.goo.gl/48fGWtdx4z4DCMrQA",
    },
    {
      icon: <MdAddCall />,
      text: "+88 01581192171",
      link: "tel:+8801581192171",
    },
    {
      icon: <MdEmail />,
      text: "mdsultanmahmud.bd00",
      link: "mailto:mdsultanmahmud.bd00@gmail.com",
    },
    {
      icon: <FaLinkedinIn />,
      text: "mdsultanmahmudbd",
      link: "https://www.linkedin.com/in/mdsultanmahmudbd",
    },
    {
      icon: <FaGithub />,
      text: "mdsultanmahmud",
      link: "https://github.com/mdsultanmahmud",
    },
  ];

  return (
    <div className="about__us__details__modal__container">
      <div className="about__modal__left">
        <div className="about__modal__left__intro">
          <img src={profilePic} alt="" />
          <h3 className="name">
            Sultan <span>Mahmud</span>
          </h3>
          <p className="designation">
            {" "}
            <span>MERN </span>Stack Developer
          </p>
          <div className="personal__info">
            {info.map((item, index) => (
              <div className="personal__info__item" key={index}>
                {item.icon}
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                ) : (
                  <p>{item.text}</p>
                )}
              </div>
            ))}
          </div>

          <a href="Sultan_Mahmud_Resume.pdf" download>
            <button>Download Resume</button>
          </a>
        </div>
      </div>
      <div className="about__modal__right scroll__hidden">
        <h2 className="about__modal__right__heading">
          About <span>Me</span>
        </h2>
        <p className="description">
          My name is <span>Sultan Mahmud</span>, and I’m a passionate and
          dedicated MERN Stack web developer with nearly two years of hands-on
          experience building dynamic, user-friendly web applications. I
          specialize in working with technologies like React.js, Next.js,
          Node.js, Express.js, MongoDB, SQL and MySQL, along with modern tools
          such as Redux Toolkit, Tailwind CSS, and Sass.
        </p>
        <div className="about__modal__quality__services">
          <h2 className="about__modal__right__heading">
            Quality <span>Services</span>
          </h2>
          <ul>
            {services?.map((service, index) => (
              <li key={index}>
                <span>
                  <IoMdArrowDropright />
                </span>{" "}
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="about__modal__programming__skill__section">
          <h2 className="about__modal__right__heading">
            My <span>Skills</span>
          </h2>
          <div className="about__skills__container">
            {skills?.map((skill, index) => (
              <img src={skill} alt="Skill" key={index} />
            ))}
          </div>
        </div>
        <div className="about__modal__education__container">
          <h2 className="about__modal__right__heading">
            Education <span>Timeline</span>
          </h2>
          <div className="education__content">
            <div className="education__content__item">
              <h3>2021-2025</h3>
              <div>
                <h2>Rajshahi University</h2>
                <p>BSc. in Statistics(present)</p>
              </div>
            </div>
            <div className="education__content__item">
              <h3>2018-2020</h3>
              <div>
                <h2>Shahzadpur Govt. College</h2>
                <p>HSC(Science)</p>
              </div>
            </div>
            <div className="education__content__item">
              <h3>2017-2018</h3>
              <div>
                <h2>Khamar Shanila High School</h2>
                <p>SSC(Science)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDetails;
