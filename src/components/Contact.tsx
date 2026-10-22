import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:akshaymishra200701@gmail.com" data-cursor="disable">
                akshaymishra200701@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a href="https://github.com/axay-gamedev" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              GitHub <MdArrowOutward />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Computer Science & Engineering <br /> <span>AI & ML · HBTU Kanpur</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()} Akshay Mishra
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
