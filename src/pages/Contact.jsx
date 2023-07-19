import React from "react";
import ContactUs from "../components/ContactUs";
import './Contact.css'
import PromoVideo from "../components/PromoVideo";

const Contact = () => {
  return (
      <div className="data-section" id="contact">
        <ContactUs/>
        <PromoVideo/>
      </div>
  );
};

export default Contact;
