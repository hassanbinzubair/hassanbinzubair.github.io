import { Link } from "react-router-dom";
import { BsInstagram, BsGithub, BsTwitterX, BsYoutube, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


const date = new Date().getFullYear();
const FooterwithLinks = () => {
  return (
    <div className="footer">
      <div className="linkfooter">
        <div className="linksp">
          <h4>Portfolio Pages</h4>
          <span>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/projects"}>Projects</Link>
          </span>
        </div>
        <div className="linksp">
          <h4>Websites & Blogs</h4>
          <span>
            <a href="https://badshahmarketinglhr.blogspot.com">
              Badshah Marketing
            </a>
            <a href="https://badshahmotors.blogspot.com">Badshah Motors</a>
            <a href="https://hassanbinzubair.github.io/cheatsheets">
              CheatSheets
            </a>
            <a href="https://hassanbinzubair.github.io/idonetask">IDoneTask</a>
            <a href="https://icancodeblog-tau.vercel.app">I Can Code</a>
          </span>
        </div>
        <div className="linkspplatforms">
          <h4>On Other Platforms</h4>
          <div>
            <span>
              <a href="https://Instagram.com/hassanbinzubair5"><BsInstagram/></a>
            </span>
            <span>
              <a href="https://x.com/IbneZubair5"><BsTwitterX/></a>
            </span>
            <span>
              <a href="https://github.com/hassanbinzubair"><BsGithub/></a>
            </span>
            <span>
              <a href="mailto:hassanbinzubair5@gmail.com"><MdEmail/></a>
            </span>
            <span>
              <a href="https://www.youtube.com/@hassanbinzubairofficial">
                <BsYoutube/>
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/hassan-bin-zubair-12508540a">
                <BsLinkedin/>
              </a>
            </span>
          </div>
        </div>
      </div>
      <footer>
        <div>
          &copy; 2025-{date} | <Link to={"/"}>Hassan bin Zubair</Link>
        </div>
      </footer>
    </div>
  );
};

export default FooterwithLinks;
