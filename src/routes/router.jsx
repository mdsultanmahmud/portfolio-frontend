import { createBrowserRouter } from "react-router-dom";
import FrontendLayout from "../layouts/FrontendLayout";
import HomePage from "../pages/HomePage/HomePage";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../pages/Contact/Contact";
import BlogDetails from "../pages/Blog/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontendLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <BlogDetails /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
