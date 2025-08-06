import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriterText = () => {
  return (
    <h2>
      A{" "}
      <span style={{ color: "#ec494d", fontWeight: "bold", marginLeft:"5px" }}>
        <Typewriter
          words={[
            "MERN Stack Developer",
            "Next.js Enthusiast",
            "Full-Stack Web Engineer",
            "Creative Frontend Architect",
            "E-commerce Web App Builder",
            "React & Redux Expert",
            "Performance-Focused Coder",
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h2>
  );
};

export default TypeWriterText;
