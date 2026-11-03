import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Connect with me on any Platform :</h1>
      <div className="platforms">
        <span>
          <h2>Gmail</h2>
          <a href="mailto:hassanbinzubair5@gmail.com">
            <CgMail />
          </a>
        </span>
        <span>
          <h2>Instagram</h2>
          <a href="https://instagram.com/hassanbinzubair5">
            <BsInstagram />
          </a>
        </span>
        <span>
          <h2>TikTok</h2>
          <a href="https://tiktok.com/hassanbinzubair5">
            <BsTiktok />
          </a>
        </span>
        <span>
          <h2>Twitter / X</h2>
          <a href="https://x.com/IbneZubair5">
            <BsTwitterX />
          </a>
        </span>
        <span>
          <h2>Github</h2>
          <a href="https://github.com/hassanbinzubair">
            <BsGithub />
          </a>
        </span>
        <span>
          <h2>Youtube Channel</h2>
          <a href="https://www.youtube.com/@hassanbinzubairofficial">
            <BsYoutube />
          </a>
        </span>
        <span>
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/hassan-bin-zubair-12508540a">
            <BsLinkedin />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
