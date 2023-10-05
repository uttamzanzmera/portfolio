import React from "react";
import "../Assert/Style.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

function Contact(props) {
  document.title = `${props.name}`;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8tl9tx5",
        "template_kaqrf1q",
        form.current,
        "wQS6ZRLTOCLUgX8eQ"
      )
      .then(
        (result) => {
          console.log(result);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };

  return (
    <>
      <section className="container-fluid mb-4 my-4">
        <div className="row">
          <div className="col-10 mx-auto">
            <h2 className="h1-responsive font-weight-bold text-center my-4">
              Contact us
            </h2>
            <p className="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us
              directly. Our team will come back to you within a matter of hours
              to help you.
            </p>

            <div className="row">
              <div className="col-md-9 mb-md-0 mb-5">
                <form
                  id="contact-form"
                  name="contact-form"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name" className="" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email" className="" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                        />
                        <label htmlFor="subject" className="" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form">
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="2"
                          className="form-control md-textarea"
                          placeholder="Your Message"
                        ></textarea>
                        <label htmlFor="message" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-md-left">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      value="submit"
                    >
                      Submit
                    </button>
                    {/* <a
                className="btn btn-primary"
                 onclick="document.getElementById('contact-form').submit();"
              >
                Send
              </a> */}
                  </div>
                </form>

                <div className="status"></div>
              </div>

              <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Surat-395004 , Gujrat , India</p>
                  </li>

                  <li>
                    <i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+91 8460846308</p>
                  </li>

                  <li>
                    <i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>uttamzanzmera143@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
