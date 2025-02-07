import React from "react";
import "./Projects.css";

// Projects data
const projects = [
  {
    title: "Mall Garage Management System (MGMS)",
    description: "Developed a system to manage mall parking.",
    techStack: "React, C#, PostgreSQL, JWT, API, UI/UX",
    link: "https://github.com/Asmaa-Alaghbari/Mall-Garage-Managment-System",
  },
  {
    title: "Museums Map",
    description:
      "Developed an interactive web application for exploring museums in Bucharest.",
    techStack: "React, Spring, MySQL, ArcGIS, Axios, React Router",
    link: "https://github.com/Asmaa-Alaghbari/Museums-Map",
  },
  {
    title: "Music App",
    description: "Developed a music app using React.",
    techStack: "React, JavaScript, CSS, Git, GitHub, API, UI/UX",
    link: "https://github.com/Asmaa-Alaghbari/Music_app",
  },
  {
    title: "Timetable App",
    description: "Developed a timetable app using JavaScript.",
    techStack: "HTML, CSS, JavaScript",
    link: "https://github.com/Asmaa-Alaghbari/Timetable-App",
  },
];

// Projects component to display the projects data
export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-techStack">
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
            <a
              className="project-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
