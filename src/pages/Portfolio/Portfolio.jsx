import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle"
import pro1 from "../../assets/pro1.jpg";
import pro2 from "../../assets/ec1.png";
import pro3 from "../../assets/ec2.jpg";
import pro4 from "../../assets/pro4.png";
import pro5 from "../../assets/ec3.png";
import { FaCheck } from "react-icons/fa";

const Portfolio = () => {
  const  projects = [
  {
    title: "Modern Portfolio Website for Developers",
    description: "A clean, responsive site to showcase developer projects and skills.",
    features: [
      "Responsive design",
      "Dark/light mode",
      "Smooth scroll",
      "Project filter",
      "Contact form"
    ],
    img: pro1
  },
  {
    title: "E-commerce Platform for Electronics",
    description: "A full-featured online store with cart, payment, and dashboard.",
    features: [
      "Product search",
      "Cart system",
      "Payment gateway",
      "Admin panel",
      "Order tracking"
    ],
    img: pro2
  },
  {
    title: "Educational Blog for Students",
    description: "A blog platform offering helpful content and guides for learners.",
    features: [
      "Category filter",
      "Markdown editor",
      "Comment system",
      "Reading progress",
      "SEO optimized"
    ],
    img: pro3
  },
  {
    title: "Task Management App with Drag & Drop",
    description: "A simple tool to organize tasks visually and boost productivity.",
    features: [
      "Kanban board",
      "Drag and drop",
      "Due dates",
      "Priority labels",
      "User auth"
    ],
    img: pro4
  },
  {
    title: "Restaurant Website with Online Menu",
    description: "Showcase restaurant dishes with an interactive, mobile-friendly layout.",
    features: [
      "Menu filter",
      "Reservation form",
      "Gallery slider",
      "Reviews section",
      "Google Maps"
    ],
    img: pro5
  },
  {
    title: "Real Estate Listing Platform",
    description: "Browse, filter, and contact for available homes and apartments.",
    features: [
      "Advanced filters",
      "Property details",
      "Agent contact",
      "Favorites list",
      "Image gallery"
    ],
    img: pro1
  },
  {
    title: "Event Management Web App",
    description: "Manage events, registrations, and participants all in one place.",
    features: [
      "Event calendar",
      "Online booking",
      "QR check-in",
      "User dashboard",
      "Notifications"
    ],
    img: pro2
  },
  {
    title: "Fitness Tracker Dashboard",
    description: "Track workouts, set goals, and monitor health metrics easily.",
    features: [
      "Step counter",
      "Workout log",
      "BMI calculator",
      "Goal tracker",
      "Dark mode"
    ],
    img: pro3
  },
  {
    title: "Job Portal for Tech Professionals",
    description: "A platform for job seekers and recruiters in the tech industry.",
    features: [
      "Resume upload",
      "Job alerts",
      "Company reviews",
      "Apply button",
      "Saved jobs"
    ],
    img: pro4
  },
  {
    title: "Travel Blog with Interactive Map",
    description: "Explore travel stories with location pins and guides on map.",
    features: [
      "Map markers",
      "Blog categories",
      "Photo gallery",
      "Search bar",
      "Share buttons"
    ],
    img: pro5
  }
];

  return (
    <div className="portfolio__page__container slide__up scroll__width">
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
            {
              projects.map((project, index) =>{
                return (
                  <SwiperSlide key={index}>
                    <div className="portfolio__project__item">
                      <div className="project__item__info">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <ul>
                          {project.features.map((feature, idx) => (
                            <li key={idx}>
                              <span>
                                <FaCheck size={14}/>
                              </span>{" "}
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="btn">View Project</button>
                      </div>
                      <div className="project__item__img">
                        <img src={project.img} alt="slide image" />
                      </div>  
                    </div>
                  </SwiperSlide>
                );
              })
            }
            
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
