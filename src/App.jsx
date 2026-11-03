import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import FooterwithLinks from "./components/FooterwithLinks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Images
import mypic from "./assets/mypic.png"
import mypic2 from "./assets/mypic2.png"

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home mypic={mypic} />
          <FooterwithLinks />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About mypic={mypic2}/>
          <FooterwithLinks />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <FooterwithLinks />
        </>
      ),
    },
    {
      path: "/projects",
      element: (
        <>
          <Navbar />
          <Projects />
          <FooterwithLinks />
        </>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
