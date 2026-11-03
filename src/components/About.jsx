import { Link } from "react-router-dom";

const About = ({mypic}) => {
  return (
    <div className="about">
      <h1>About me</h1>
      <img src={mypic} alt="My Image" />
      <p>I'm Hassan bin Zubair from Lahore, Panjab, Pakistan.</p>
      <p>
        I'm a Full-Stack Web Developer passionate about building modern,
        responsive, and user-friendly web applications. Whether you need a
        professional business website, a dynamic web application, a blog, or a
        complete e-commerce store, I can help turn your ideas into reality.
      </p>

      <h2>My Skills & Expertise:</h2>
      <ul>
        <li><b>Frontend Development:</b> HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap</li>
        <li><b>Backend Development:</b> Node.js, Express.js, PHP</li>
        <li><b>Database Management:</b> MongoDB, MySQL</li>
        <li><b>CMS & Web Platforms:</b> WordPress, Shopify, Wix</li>
        <li>Web Design, Responsive Layouts & UI/UX</li>
        <li>Website Optimization, Performance & SEO</li>
        <li>Git, GitHub & Modern Development Tools</li>
      </ul>

      <h2>What You Can Expect:</h2>
      <ul>
        <li>Clean, maintainable, and well-structured code</li>
        <li>Responsive websites that work across different devices</li>
        <li>A focus on performance, usability, and functionality</li>
        <li>Reliable project management from planning to delivery</li>
        <li>Clear communication and regular project updates</li>
      </ul>
      <p>
        I believe every project deserves attention to detail, practical
        solutions, and a professional approach. My goal is to help businesses
        and individuals establish a strong online presence through effective web
        development.
      </p>
      <h3>Let's work together to bring your next web project to life!</h3>
      <button><Link to={"/contact"}>Contact Me</Link></button>
    </div>
  );
};

export default About;
