import React from "react";
import "./Projects.css";

// Projects data
const projects = [
  {
    title: "Notes App",
    description:
      "A React-based web application designed to help users create, manage, and search through personal notes.",
    techStack: "React, JavaScript, CSS, Git, GitHub",
    link: "https://github.com/Asmaa-Alaghbari/Notes-App",
  },
  {
    title: "Habit Tracker",
    description:
      "Flutter app for building and tracking daily habits with reminders and progress monitoring.",
    techStack: "Dart, Cross-platform Development, Flutter",
    link: "https://github.com/Asmaa-Alaghbari/Habit-Tracker",
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "Classic two-player strategy game where players take turns marking spaces on a 3x3 grid to form a winning line.",
    techStack: "Python, Object-Oriented Programming (OOP)",
    link: "https://github.com/Asmaa-Alaghbari/Tic-Tac-Toe-Game",
  },
  {
    title: "Portfolio Website",
    description: "Developed a personal portfolio website using React.",
    techStack: "React, JavaScript, CSS, Git, GitHub",
    link: "https://github.com/Asmaa-Alaghbari/My-Portfolio",
  },
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
