import React, { useEffect, useRef, useState } from "react";
import "./Blog.css";
import blog1 from "../../assets/ec1.png";
import blog2 from "../../assets/ec2.jpg";
import blog3 from "../../assets/ec3.png";
import blog4 from "../../assets/pro5.png";
import blog5 from "../../assets/pro3.PNG";
const Blog = () => {
  const blogs = [
    {
      title: "Getting Started with React: A Beginner’s Guide",
      description:
        "Learn how to set up your first React project and understand the fundamentals like components, props, and state.",
      img: blog1,
      date: "4 June, 2025",
      author: "Sultan Rahman",
      time: "5 min read",
      category: "Web Development",
    },
    {
      title: "Understanding the Bias-Variance Tradeoff in Machine Learning",
      description:
        "Explore how bias and variance affect your machine learning models and how to find the right balance.",
      img: blog2,
      date: "2 June, 2025",
      author: "Ayesha Khatun",
      time: "6 min read",
      category: "Machine Learning",
    },
    {
      title: "CNNs Explained: A Deep Dive into Image Recognition",
      description:
        "Convolutional Neural Networks (CNNs) are the backbone of image classification. Learn how they work step by step.",
      img: blog3,
      date: "30 May, 2025",
      author: "Rafiul Islam",
      time: "8 min read",
      category: "Deep Learning",
    },
    {
      title: "10 Useful VS Code Extensions for Web Developers",
      description:
        "Speed up your workflow with these must-have VS Code extensions designed for productivity and clean coding.",
      img: blog4,
      date: "28 May, 2025",
      author: "Tania Sultana",
      time: "4 min read",
      category: "Web Development",
    },
    {
      title: "What’s New in JavaScript ES2025?",
      description:
        "Explore the latest features coming to JavaScript in the 2025 release and how they can enhance your coding experience.",
      img: blog5,
      date: "25 May, 2025",
      author: "Sultan Rahman",
      time: "5 min read",
      category: "Machine Learning",
    },
    {
      title: "Reinforcement Learning Explained Simply",
      description:
        "An easy-to-understand explanation of how reinforcement learning works, with examples from gaming and robotics.",
      img: blog1,
      date: "22 May, 2025",
      author: "Nadia Hossain",
      time: "7 min read",
      category: "Machine Learning",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(blogs);
  const containerRef = useRef();
  const categories = [
    "All",
    "Web Development",
    "Machine Learning",
    "Deep Learning",
  ];
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.classList.remove("fade__in");
    void el.offsetWidth;
    el.classList.add("fade__in");
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory == "All") {
      setSelectedBlog(blogs);
    } else {
      const filteredBlogs = blogs.filter(
        (blog) => blog.category == selectedCategory
      );
      setSelectedBlog(filteredBlogs);
    }
  }, [selectedCategory]);
  return (
    <div className="portfolio__blog__container slide__up">
      <h1 className="general__heading">
        Awesome <span>Blogs</span>
      </h1>
      <div className="blog__filtering__container">
        {categories.map((category, index) => {
          return (
            <button
              className={`${category == selectedCategory ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
              key={index}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="portfolio__blog__items fade__in" ref={containerRef}>
        {selectedBlog.map((blog, index) => {
          return (
            <div key={index} className="portfolio__blog__item ">
              <img src={blog?.img} alt="" />
              <div className="blog__info__container">
                <h2>{blog?.title}</h2>
                <p>{blog?.description.slice(0, 100)}...</p>
                {/* <div className="blog__info">
                                <span className="blog__date">{blog?.date}</span>
                                <span className="blog__author">{blog?.author}</span>
                                <span className="blog__time">{blog?.time}</span>
                            </div> */}
                <button>Read More</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
