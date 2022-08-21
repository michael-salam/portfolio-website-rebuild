import { useState } from "react";
import "./GetInTouch.scss";

const GetInTouch = () => {
  const [status, setStatus] = useState("Send me a message");

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    const details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    const response = await fetch(
      `https://michael-salam.herokuapp.com/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      }
    );
    setStatus("Send me a message");
    setTimeout(() => {
      alert("Thank you for contacting me! I will reply you soonest.");
    }, 500);
    const result = await response.json();
    console.log(result.status);
  };
  return (
    <section id="get-in-touch" className="get-in-touch">
      <div className="get-in-touch__heading">
        <h2 className="main-heading">Get in touch</h2>
        <h3 className="sub-heading">
          Ready to join hands and make great things happen? Fill the form below
          to send me a message, I'll be sure to get back to you : )
        </h3>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" required />
        </div>
        <button className="btn" type="submit">
          {status}
        </button>
      </form>
    </section>
  );
};

export default GetInTouch;
