import React from "react";
import "./Experience.css";

// Experience data
const experience = [
  {
    title: "Electronic Computer & Network Operator",
    company: "Total Office Trading S.R.L.",
    description: "Analyzed and managed data for the company.",
    techStack:
      "DistribNet, Data Analysis, Microsoft Office, Accounting Software, Communication",
    link: "https://www.totaloffice.ro/",
  },
  {
    title: "Python mentor with C/Internet Heroes",
    company: "Dalia's Book",
    description:
      "Mentored students in Python programming and guided them in developing their projects.",
    techStack:
      "Python, Object-Oriented Programming, Communication, Problem-solving, Mentoring, Coding Instruction, Volunteer Work",
    link: "https://www.carteadaliei.ro/",
  },
  {
    title: "Software Programming Instructor",
    company: "Logiscool Ltd.",
    description:
      "Taught students the fundamentals of programming and software development.",
    techStack:
      "Scratch, JavaScript, Python, Software Instruction, Communication, Problem-solving",
    link: "https://www.logiscool.com/ro/",
  },
  {
    title: "Web development",
    company: "Authur-Imperium Global Energy (AIGE) Limited",
    description: "Developed websites for clients and personal projects.",
    techStack:
      "HTML, CSS, JavaScript, React, Web, Microsoft Office, Communication, Problem-solving, Teamwork",
    link: "https://aige.info/",
  },
  {
    title: "Web development",
    company: "Euronews Romania",
    description: "Developed websites for clients and personal projects.",
    techStack: "HTML, CSS, JavaScript, React, Web, UI/UX, API, Git, Teamwork",
    link: "https://www.euronews.ro/",
  },
];

// Experience component to display the experience data
export default function Experience() {
  return (
    <section className="experience-section">
      <h2 className="section-title">My Experience</h2>
      <div className="experience-grid">
        {experience.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-company">
              <a href={exp.link} target="_blank" rel="noreferrer">
                {exp.company}
              </a>
            </p>
            <p className="experience-description">{exp.description}</p>
            <p className="experience-techStack">
              <strong>Tech Stack:</strong> {exp.techStack}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
