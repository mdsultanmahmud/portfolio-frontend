import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import pro1 from "../../assets/pro1.png";
import pro2 from "../../assets/pro2.png";
import pro3 from "../../assets/pro3.png";
import pro4 from "../../assets/pro4.png";
import pro5 from "../../assets/mentors.png";
import { FaCheck } from "react-icons/fa";
// import CustomModal from "../../components/CustomModal/CustomModal";
// import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const navigate = useNavigate();
  const projects = [
    {
      title: "Shock — NFC Card Selling Website",
      description:
        "A modern web platform for selling customizable NFC cards with a personalized public profile system.",
      features: [
        "User dashboard",
        "Admin dashboard",
        "Light/Dark theme toggle",
        "Card customization",
        "Public profile for each card",
      ],
      technology: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Bcrypt",
        "JWT",
      ],
      img: pro1,
      demo: "https://shocknfc.netlify.app/",
    },
    {
      title: "RMG Review — Garments Sector Q&A Platform",
      description:
        "A garments industry-focused learning and job portal featuring premium content and interactive tools.",
      features: [
        "Access to paid and unpaid articles",
        "User and admin dashboards",
        "Job circular and notices",
        "Document download support",
        "Live calculation features",
      ],
      technology: ["React", "Node.js", "Express.js", "MySQL", "Bcrypt", "JWT"],
      img: pro2,
      demo: "https://m.reviewrmg.app/",
    },
    {
      title: "Elevator Engineers — Product Agency Website",
      description:
        "A professional agency site showcasing elevator product videos, bestsellers, and customer solutions.",
      features: [
        "Responsive agency portfolio",
        "Elevator product showcase",
        "Product video section",
        "Sell history tracker",
        "Top-selling product highlights",
      ],
      technology: ["Next.js", "Tailwind CSS"],
      img: pro3,
      demo: "https://elavator-engineers.netlify.app/",
    },
    {
      title: "SAAREP — Agency Profile & Membership Site",
      description:
        "An elegant portfolio website representing an agency’s mission, team, and online membership system.",
      features: [
        "Mission and vision display",
        "Important persons showcase",
        "PayPal payment integration",
        "Membership claim functionality",
      ],
      technology: ["React", "React Bootstrap"],
      img: pro4,
      demo: "https://soft-horse-b708ef.netlify.app/",
    },
    {
      title: "Mentors4Data — Data Science & Web Development Agency",
      description:
        "Mentors4Data is a modern startup landing page offering two major services: Data Analysis and Web Development.",
      features: [
        " A clean and modern landing page",
        " FAQ section with smooth toggle animation",
        "A detailed and responsive footer",
        "Filtering Courses page",
      ],
      technology: ["Next.js", "Tailwind CSS"],
      img: pro5,
      demo: "https://mentors4data.netlify.app",
    },
  ];

  

  return (
    <>
      <div className="portfolio__page__container slide__up">
        <div className="portfolio__page__inner__container">
          <h1 className="general__heading">
            Creative <span>Portfolio</span>
          </h1>
          <div className="portfolio__project__items">
            <Swiper
              direction={"vertical"}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              loop={true}
              touchRatio={1}
              touchAngle={45}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              className="portfolio__swiper__container"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="portfolio__project__item">
                      <div className="project__item__info">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <ul className="features__container">
                          {project.features.map((feature, idx) => (
                            <li key={idx}>
                              <span>
                                <FaCheck size={14} />
                              </span>{" "}
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        {/* <ul className="technology__container">
                          {project.technology.map((tech, idx) => (
                            <li key={idx}>
                              {tech}
                            </li>
                          ))}
                        </ul> */}
                        <div className="portfolio__item__button__continer">
                          {/* <button onClick={() => setIsModalOpen(true)}>
                            View Details
                          </button> */}
                          <button
                            onClick={() => window.open(project?.demo, "_blank")}
                          >
                            View Demo
                          </button>
                        </div>
                      </div>
                      <div className="project__item__img">
                         <ul className="technology__container">
                          {project.technology.map((tech, idx) => (
                            <li key={idx}>
                              {tech}
                            </li>
                          ))}
                        </ul>
                        <img src={project.img} alt="slide image" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      {/* <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div
          className="portfolio__modal__content scroll__hidden"
          dangerouslySetInnerHTML={{ __html: project }}
        />
      </CustomModal> */}
    </>
  );
};

export default Portfolio;
