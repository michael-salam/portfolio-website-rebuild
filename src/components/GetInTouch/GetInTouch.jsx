import "./GetInTouch.scss";

// import icons
import whatsappIcon from "../../images/icon-whatsapp.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import instagramIcon from "../../images/icon-instagram.svg";

const GetInTouch = () => {
  return (
    <section id="get-in-touch" className="get-in-touch">
      <div className="get-in-touch__heading">
        <h2 className="main-heading">Get in touch</h2>
        <h3 className="sub-heading">
          Ready to join hands and make great things happen? Click the button
          below to send me a message, I'll be sure to get back to you : )
        </h3>
      </div>

      <a className="btn" href="mailto:michaeldimimu@gmail.com">
        Send me an email: michaeldimimu@gmail.com
      </a>

      <div className="socials">
        <a className="link" href="https://wa.link/y2rvch">
          <img src={whatsappIcon} alt="Whatsapp" />
          <p>WhatsApp</p>
        </a>
        <a className="link" href="https://twitter.com/michaeldimimu">
          <img src={twitterIcon} alt="Twitter" />
          <p>Twitter</p>
        </a>
        <a className="link" href="https://www.instagram.com/michaeldimimu">
          <img src={instagramIcon} alt="Instagram" />
          <p>Instagram</p>
        </a>
      </div>
    </section>
  );
};

export default GetInTouch;
