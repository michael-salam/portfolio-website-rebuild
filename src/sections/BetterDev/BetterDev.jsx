import "./BetterDev.scss";

import betterdev from "../../images/betterdev-cover.png";

const BetterDev = () => {
  return (
    <section id="community">
      <h2 className="main-heading">BetterDev</h2>
      <div className="container">
        <div className="left">
          <p>
            I'm someone who takes pride in contributing to the growth of others,
            which is why I created a web developer community called BetterDev
          </p>
          <p>
            Through BetterDev, I am helping over three hundred web developers
            (and counting) across Nigeria connect, collaborate and learn from
            one another.
          </p>
          <p>
            Interested?{" "}
            <a href="https://wa.link/bhvg28">Find out how you can join</a>
          </p>
        </div>
        <div className="right">
          <img src={betterdev} alt="BetterDev cover" />
        </div>
      </div>
    </section>
  );
};

export default BetterDev;
