import React from "react";
import "./HomePage.css";
import TypeWriterText from "../../components/TypeWriterText/TypeWriterText";
import { useNavigate } from "react-router-dom";
import "../../style/commonStyle.css"
const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className="portfolio__homepage__container">
      <div className="portofolio__homepage__inner slide__up">
        <h1>
          Sultan <span>Mahmud</span>{" "}
        </h1>
        <TypeWriterText />
        <button onClick={() => navigate("/contact")}>Get In Touch</button>
      </div>
    </div>
  );
};

export default HomePage;
