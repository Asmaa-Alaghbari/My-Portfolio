import React from "react";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

// Contact data
const contact = [
  {
    name: "Email",
    icon: <FiMail />,
    link: "mailto:asmaasasy@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/asmaa-alaghbari/",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/Asmaa-Alaghbari",
  },
  {
    name: "Telegram",
    icon: <FaTelegram />,
    link: "https://t.me/asmaa_alaghbari",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    link: "https://wa.me/40725175668",
  },
];

// Contact component to display the contact data
export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">
        I'd love to hear from you! Feel free to reach out through any of the
        platforms below.
      </p>
      <div className="contact-grid">
        {contact.map((contact, index) => (
          <a
            className="contact-card"
            key={index}
            href={contact.link}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">{contact.icon}</span>
            <span className="contact-name">{contact.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
