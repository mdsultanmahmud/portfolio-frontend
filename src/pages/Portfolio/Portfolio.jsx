import React, { useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import pro1 from "../../assets/pro1.jpg";
import pro2 from "../../assets/ec1.png";
import pro3 from "../../assets/ec2.jpg";
import pro4 from "../../assets/pro4.png";
import pro5 from "../../assets/ec3.png";
import { FaCheck } from "react-icons/fa";
import CustomModal from "../../components/CustomModal/CustomModal";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Modern Portfolio Website for Developers",
      description:
        "A clean, responsive site to showcase developer projects and skills.",
      features: [
        "Responsive design",
        "Dark/light mode",
        "Smooth scroll",
        "Project filter",
        "Contact form",
      ],
      img: pro1,
    },
    {
      title: "E-commerce Platform for Electronics",
      description:
        "A full-featured online store with cart, payment, and dashboard.",
      features: [
        "Product search",
        "Cart system",
        "Payment gateway",
        "Admin panel",
        "Order tracking",
      ],
      img: pro2,
    },
    {
      title: "Educational Blog for Students",
      description:
        "A blog platform offering helpful content and guides for learners.",
      features: [
        "Category filter",
        "Markdown editor",
        "Comment system",
        "Reading progress",
        "SEO optimized",
      ],
      img: pro3,
    },
    {
      title: "Task Management App with Drag & Drop",
      description:
        "A simple tool to organize tasks visually and boost productivity.",
      features: [
        "Kanban board",
        "Drag and drop",
        "Due dates",
        "Priority labels",
        "User auth",
      ],
      img: pro4,
    },
    {
      title: "Restaurant Website with Online Menu",
      description:
        "Showcase restaurant dishes with an interactive, mobile-friendly layout.",
      features: [
        "Menu filter",
        "Reservation form",
        "Gallery slider",
        "Reviews section",
        "Google Maps",
      ],
      img: pro5,
    },
    {
      title: "Real Estate Listing Platform",
      description:
        "Browse, filter, and contact for available homes and apartments.",
      features: [
        "Advanced filters",
        "Property details",
        "Agent contact",
        "Favorites list",
        "Image gallery",
      ],
      img: pro1,
    },
    {
      title: "Event Management Web App",
      description:
        "Manage events, registrations, and participants all in one place.",
      features: [
        "Event calendar",
        "Online booking",
        "QR check-in",
        "User dashboard",
        "Notifications",
      ],
      img: pro2,
    },
    {
      title: "Fitness Tracker Dashboard",
      description:
        "Track workouts, set goals, and monitor health metrics easily.",
      features: [
        "Step counter",
        "Workout log",
        "BMI calculator",
        "Goal tracker",
        "Dark mode",
      ],
      img: pro3,
    },
    {
      title: "Job Portal for Tech Professionals",
      description:
        "A platform for job seekers and recruiters in the tech industry.",
      features: [
        "Resume upload",
        "Job alerts",
        "Company reviews",
        "Apply button",
        "Saved jobs",
      ],
      img: pro4,
    },
    {
      title: "Travel Blog with Interactive Map",
      description:
        "Explore travel stories with location pins and guides on map.",
      features: [
        "Map markers",
        "Blog categories",
        "Photo gallery",
        "Search bar",
        "Share buttons",
      ],
      img: pro5,
    },
  ];
  const project = `
    <h2><strong>🔷 Project Title:</strong></h2>
    <p><strong>ReviewRMG – Garments Industry Review Platform</strong></p>

    <h3><strong>🔶 Short Description:</strong></h3>
    <p>ReviewRMG is a comprehensive web platform built to connect global buyers, workers, and stakeholders with ready-made garments (RMG) factories and service providers across Bangladesh. It allows users to discover, rate, and review garment factories based on compliance, worker safety, product quality, and customer service.</p>

    <h3><strong>🧩 Key Features:</strong></h3>
    <ul>
      <li><strong>Factory Listings & Profiles:</strong> Dedicated pages with factory info, certifications, images, and map location.</li>
      <li><strong>User Reviews & Ratings:</strong> Review factories based on Quality, Compliance, and more.</li>
      <li><strong>Category-based Browsing:</strong> Filter factories by type, location, and certification.</li>
      <li><strong>Search & Filters:</strong> Advanced filtering with keyword support.</li>
      <li><strong>Admin Dashboard:</strong> Factory, review, and announcement management.</li>
      <li><strong>User Dashboard:</strong> Saved factories and review history.</li>
      <li><strong>Authentication:</strong> JWT-based secure login for users and admins.</li>
      <li><strong>Responsive UI:</strong> Mobile-first design using React and Tailwind.</li>
      <li><strong>Real-Time Notifications:</strong> Live alerts via Socket.io.</li>
      <li><strong>Blog Section:</strong> News and insights from the industry.</li>
    </ul>

    <h3><strong>⚙️ Technologies Used:</strong></h3>
    <ul>
      <li><strong>Frontend:</strong> React.js, Tailwind CSS, Redux Toolkit</li>
      <li><strong>Backend:</strong> Node.js, Express.js, MySQL</li>
      <li><strong>Authentication:</strong> JWT, Bcrypt</li>
      <li><strong>Real-Time:</strong> Socket.io</li>
      <li><strong>Uploads:</strong> Multer for local image handling</li>
      <li><strong>Map:</strong> Google Maps Embed API</li>
      <li><strong>Deployment:</strong> VPS with Nginx + PM2</li>
    </ul>

    <h3><strong>🎯 Project Goals:</strong></h3>
    <ul>
      <li>Increase transparency in the RMG sector</li>
      <li>Empower buyers and workers to share real feedback</li>
      <li>Central hub for trusted RMG factory reviews</li>
    </ul>

    <h3><strong>💡 Possible Enhancements:</strong></h3>
    <ul>
      <li>Factory verification using uploaded certificates</li>
      <li>Live chat between buyers and admins</li>
      <li>Multi-language support (Bengali, English)</li>
      <li>Public API access for external use</li>
    </ul>
  `;

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
                        <ul>
                          {project.features.map((feature, idx) => (
                            <li key={idx}>
                              <span>
                                <FaCheck size={14} />
                              </span>{" "}
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="portfolio__item__button__continer">
                          <button onClick={() => setIsModalOpen(true)}>
                            View Details
                          </button>
                          <button>View Project</button>
                        </div>
                      </div>
                      <div className="project__item__img">
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
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div
          className="portfolio__modal__content scroll__hidden"
          dangerouslySetInnerHTML={{ __html: project }}
        />
      </CustomModal>
    </>
  );
};

export default Portfolio;
