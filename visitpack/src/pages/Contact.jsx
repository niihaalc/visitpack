import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v7rtsiu",      
        "template_ysvpu1o",     
        formRef.current,
        "VUtS1dAo_RzUJKtTT"     
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <>
   
      <section className="bg-dark py-5">
        <div className="container text-center text-light">
          <h1 className="fw-bold display-5">  Contact Us</h1>
          <p className="text-secondary fs-5 mt-3">  Have a question or want a custom travel plan? We'd love to hear from you.</p>
        </div>
      </section>


      <section className="bg-dark py-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6">

        <form ref={formRef} onSubmit={sendEmail} className="text-light">

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" name="from_name" className="form-control bg-dark text-light border-secondary" required/>
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" name="from_email" className="form-control bg-dark text-light border-secondary" required/>
          </div>

          <div className="mb-3">
            <label className="form-label"> Phone Number <span className="text-secondary">(Optional)</span> </label>
            <input  type="tel"  name="phone"  className="form-control bg-dark text-light border-secondary"  placeholder="+91 XXXXX XXXXX" />
          </div>

          <div className="mb-3">
            <label className="form-label">Reason for Contact</label>
            <select name="subject" className="form-select bg-dark text-light border-secondary" required >
              <option value="">Select a reason</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Package Suggestion">Package Suggestion</option>
              <option value="Planner Feedback">Planner Feedback</option>
              <option value="Technical Issue">Technical Issue</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea name="message" rows="4" className="form-control bg-dark text-light border-secondary" required ></textarea>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-success px-5"> Send Message </button>
          </div>

        </form>

      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Contact;

