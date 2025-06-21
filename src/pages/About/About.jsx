import React, { useState } from "react";
import "./About.css";
import profile from "../../assets/profile2.jpg";
import CustomModal from "../../components/CustomModal/CustomModal";
import AboutUsDetails from "../../components/AboutUsDetails/AboutUsDetails";
const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="portfolio__about__container slide__up">
        <div className="about__img__section">
          <img src={profile} alt="" />
        </div>
        <div className="about__text__section">
          <h1>
            Sultan <span>Mahmud</span>
          </h1>
          <p className="second__title">Full Stack Developer (MERN)</p>
          <p className="description">
            My name is <span>Sultan Mahmud</span>, and I’m a passionate and
            dedicated MERN Stack web developer with nearly two years of hands-on
            experience building dynamic, user-friendly web applications. I
            specialize in working with technologies like React.js, Next.js,
            Node.js, Express.js, MongoDB, SQL and MySQL, along with modern tools
            such as Redux Toolkit, Tailwind CSS, and Sass.
          </p>
          <button onClick={() => setIsModalOpen(true)}>Learn More</button>
        </div>
      </div>
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AboutUsDetails />
      </CustomModal>
    </>
  );
};

export default About;
