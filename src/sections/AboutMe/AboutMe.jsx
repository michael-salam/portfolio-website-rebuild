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
          Currently in my second year of studying medicine at Bingham
          University, Nasarawa, Nigeria, I am a frontend web developer based in
          Abuja, Nigeria. I have been building websites for over two years, and
          I can confidently say that I'm loving every step of this exciting
          journey.
        </p>
        <p>
          I built this website using the React JavaScript library, which is one
          of my areas of expertise. I have worked on several other projects
          using several technical skills including:
        </p>
        <ul className="skill-list">
          <li>React</li>
          <li>NextJS</li>
          <li>SCSS</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>UI Design</li>
          <li>Responsive Design</li>
          <li>Mobile/Desktop-First Design</li>
          <li>Commerce.js API</li>
        </ul>
        <p>
          As a developer, I don't compromise when it comes to the quality of my
          work. I take pride in building responsive websites that are usable
          across all screen sizes.
        </p>
        <p>
          I'm always excited to work with new clients and collaborate on
          exciting projects. Let's work together and contribute to each other's
          growth. I'm confident that we can create something amazing together!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
