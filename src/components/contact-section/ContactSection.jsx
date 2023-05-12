import React from "react";

import Form from "./Form";
import Info from "./Info";
import Maps from "../Maps";

import "./contact-section.css";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};
const ContactSection = () => (
  <>
    <div className="contact-section">
      <Form />
      <Info />
      <Maps />
    </div>
  </>
);

export default ContactSection;
