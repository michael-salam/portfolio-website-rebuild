import "./Services.scss";

import problem from "../../images/icon-problem.svg";
import solution from "../../images/icon-solution.svg";
import outcome from "../../images/icon-outcome.svg";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__heading">
        <h2 className="main-heading">Services</h2>
        <h3 className="sub-heading">
          Get curated solutions to fit exactly what you need
        </h3>
      </div>

      <div className="services-container">
        <div className="service">
          <img src={problem} alt="" />
          <h3 className="heading">Your problem</h3>
          <ul className="points">
            <li className="point">
              Your website's user interface is{" "}
              <b>poor and needs to be optimised</b>.
            </li>
            <li className="point">
              Your website is <b>not leading to more sales</b>.
            </li>
            <li className="point">
              <b>You don't have a website</b> to begin with.
            </li>
          </ul>
        </div>

        <div className="service">
          <img src={solution} alt="" />
          <h3 className="heading">How I solve it</h3>
          <ul className="points">
            <li className="point">
              I <b>rebuild your website's user interface</b>, making it better
              and more appealing.
            </li>
            <li className="point">
              I <b>optimise your website for driving better traffic</b>.
            </li>
            <li className="point">
              I <b>create a custom solution</b> that will give you awesome
              results.
            </li>
          </ul>
        </div>

        <div className="service">
          <img src={outcome} alt="" />
          <h3 className="heading">Outcome</h3>
          <p className="points">
            You end up with a <b>great-looking website</b>, which is{" "}
            <b>built with results in mind</b> and <b>custom-tailored</b> to you
            and your business needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
