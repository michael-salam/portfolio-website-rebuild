import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <div className="about-me__heading">
        <h2 className="main-heading">About Me</h2>
        <h3 className="sub-heading">
          Let me tell you a little bit about myself
        </h3>
      </div>

      <div className="copy">
        <p>
          My name is Michael Salam. I am a{" "}
          <b>web designer and developer based in Abuja, Nigeria</b>. I have been
          building websites for just under two years, and been having fun doing
          it.
        </p>
        <p>
          I am currently in my <b>second year of studying medicine</b> at
          Bingham University, Nasarawa, Nigeria.
        </p>
        <p>
          I built this website using the <b>React</b> JavaScript library, with
          which I am highly skilled and have done a number of projects.
          Technologies and concepts which I am skilled in include but are not
          limited to:
        </p>
        <ul className="skill-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>SCSS</li>
          <li>Bootstrap</li>
          <li>UI design</li>
          <li>Responsive design</li>
          <li>Mobile/Desktop-first design</li>
          <li>Copywriting</li>
        </ul>
        <p>
          I do not compromise when it comes to quality of work and building
          responsive websites which are usable at all sreen sizes is something I
          take very seriously.
        </p>
        <p>
          It would be great to work with you and I believe we can contribute
          immensely to each other's growth!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
