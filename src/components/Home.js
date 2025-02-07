import React from "react";
import AsmaaProfile from "../assets/AsmaaProfile.jpg";
import Project from "./Projects";
import Experince from "./Experience";
import Education from "./Education";
import Language from "./Language";
import Contact from "./Contact";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <section className="home-section">
        <div className="home-content">
          <img
            src={AsmaaProfile}
            alt="Asmaa Alaghbari"
            className="profile-pic"
          />
          <h1 className="home-title">Asmaa Alaghbari</h1>
          <p className="home-subtitle">Full Stack Developer & Designer</p>
          <p className="home-description">
            Welcome to my portfolio! I am passionate about creating beautiful
            and functional web applications. Explore my projects, experience,
            and get in touch!
          </p>
          <a href="/projects" className="home-button">
            View Projects
          </a>
        </div>
      </section>
      <section id="projects" className="content-section">
        <Project />
      </section>
      <section id="experience" className="content-section">
        <Experince />
      </section>
      <section id="education" className="content-section">
        <Education />
      </section>
      <section id="language" className="content-section">
        <Language />
      </section>
      <section id="contact" className="content-section">
        <Contact />
      </section>
    </div>
  );
}
