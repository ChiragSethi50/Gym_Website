import React, { useRef } from "react";
import "./Email.css";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qpxu7h9",
        "service_qpxu7h9",
        form.current,
        "S5BTDsTXNzEUmXpTJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="email">
      <div className="left-e">
        <hr id='email'/>
        <div>
          <span>have any query?</span>
        </div>
        <div>
          <span className="wordart">Email us</span>
        </div>
      </div>
      <div className="right-e">
        <form ref={form} className="emails" onSubmit={sendEmail}>
          <label className="label">
            Name <input className="input" type="text" name="user_name" />
          </label>

          <label className="label">
            Email <input type="email" className="input" name="user_email" />
          </label>

          <label className="label">Message</label>
          <textarea className="input" name="message" />
          <button className="btn email-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
