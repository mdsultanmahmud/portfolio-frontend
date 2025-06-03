import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AnimatedCursor from "react-animated-cursor";
import ParticlesBackground from "./config/ParticlesBackground";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const App = () => {
  // const [menu, setMenu] = useState("home");

  return (
    <>
      <ParticlesBackground />
     
      <RouterProvider router={router} />
      <AnimatedCursor
        innerSize={6}
        outerSize={30}
        color="#4169e4"
        outerAlpha={0.3}
        innerScale={0.8}
        outerScale={4.5}
        hasBlendMode={true}
        trailingSpeed={8}
        outerStyle={{
          border: "2px solid #4169e4",
        }}
        innerStyle={{ backgroundColor: "#4169e4" }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
};

export default App;
