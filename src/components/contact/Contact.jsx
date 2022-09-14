import React, { useRef } from "react";
import "./contact.scss";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

import emailjs from "@emailjs/browser";

export default function Contact() {
  //const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();
  //     alert("submitted");

  //   emailjs
  //     .sendForm(
  //       "service_700gsvr",
  //       "template_ipveum2",
  //       e.target,
  //       "7wA0yF2nqQh9brMJE"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    [...form.elements].forEach((input) =>
      console.log(`${input.name}: ${input.value}`)
    ); // Not Important
    form.reset();

    emailjs
      .sendForm(
        "service_700gsvr",
        "template_ipveum2",
        form.current,
        "7wA0yF2nqQh9brMJE"
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
    <div className="contact" id="contact">
      <h1>Let's Connect!</h1>
      <div className="top-page">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            autocomplete="off"
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            autocomplete="off"
          />

          {/* <input
            type="text"
            placeholder="Subject"
            id="subject"
            autocomplete="off"
          /> */}

          <textarea
            name="message"
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit" value="Send">
            Send
          </button>
        </form>
      </div>

      <div className="bottom-page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill=" #94b49f"
            fill-opacity="1"
            d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,154.7C672,128,768,96,864,106.7C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
