import React from "react";
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const info = [
    {
      icon: <FaLocationDot />,
      text: "Rajshahi, Bangladesh",
    },
    {
      icon: <IoIosCall />,
      text: "+8801581192171",
    },
    {
      icon: <MdOutlineEmail />,
      text: "mdsultanmahmud.bd00@gmail.com",
    },
    {
      icon: <FaLinkedinIn />,
      text: "mdsultanmahmudbd",
    },
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="portfolio__contact__container slide__up">
      <div className="portfolio__contact__inner__container">
        <h1>
          Get In <span>Touch</span>
        </h1>
        <div className="portfolio__contact__info">
          <div className=" d__flex">
            {info.map((item, index) => (
              <div className="contact__info" key={index}>
                <span>{item?.icon}</span>
                <p>{item?.text}</p>
              </div>
            ))}
          </div>
          <div className="portfolio__contact__form">
            <form onSubmit={handleContactSubmit}>
              <div className="d__flex">
                <div className="form__group">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Name"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form__group">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write message here ..."
                  ></textarea>
                </div>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
