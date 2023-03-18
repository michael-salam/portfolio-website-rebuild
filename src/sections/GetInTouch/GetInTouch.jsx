import "./GetInTouch.scss";

// import icons
import whatsappIcon from "../../images/icon-whatsapp.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import facebookIcon from "../../images/icon-facebook.svg";

const GetInTouch = () => {
  return (
    <section id="get-in-touch" className="get-in-touch">
      <div className="get-in-touch__heading">
        <h2 className="main-heading">Get in touch</h2>
        <h3 className="sub-heading">
          Click the button below to send me an email, I'll be sure to get back
          to you : )
        </h3>
      </div>

      <a
        className="btn"
        href="mailto:michael.o.salam@gmail.com?subject=Hey Michael, I'd love to work with you!&body=My name is [insert name here]. I saw your website and you are just what we've been looking for. [Specify how I can help you]"
      >
        Send me an email: michael.o.salam@gmail.com
      </a>

      <div className="socials">
        <p>Not a fan of email? Reach out on my socials:</p>
        <div className="flex-container">
          <a
            className="link"
            href="https://wa.link/it4hbt"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsappIcon} alt="Whatsapp" />
            <p>WhatsApp</p>
          </a>
          <a
            className="link"
            href="https://twitter.com/michaeldimimu"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterIcon} alt="Twitter" />
            <p>Twitter</p>
          </a>
          <a
            className="link"
            href="https://www.facebook.com/michaeldimimu"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" />
            <p>Facebook</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
