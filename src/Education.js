import React, { useState } from "react";
import "./Education.css";

// Education data
const education = [
  {
    title: "Bachelor of Science in Information Technology",
    university: "University Politehnica of Bucharest",
    faculty: "Faculty of Automatic Control and Computers",
    year: "2022 - 2024",
    techStack:
      "Mathematical Analysis & Algebra, Logic Design, Physics, Information Processing, Data Structures, Algorithm Analysis, Analog & Digital Electronics, Computer Organization and Assembly Language, Systems Theory, Data Acquisition and Virtual Instrumentation, Object-Oriented Programming, Communication Protocols, Programming Paradigms, Parallel and Distributed Algorithms, Computer Graphics, Formal and Automatic Languages, Operating Systems, Databases, Performance Evaluation, Integration Information Systems, Web Programming, CAD/CASE Systems, Software Project Management, E-Commerce, Economics, Marketing",
    link: "https://upb.ro/en/",
  },
  {
    title: "Bachelor of Science in Computer Science",
    university: "University of People",
    faculty: "",
    year: "2022 - 2024",
    techStack:
      "Software Engineering, Mobile Applications, Communications and Networking, Computer Graphics, Databases, Big Data, Data Mining and Machine Learning, Systems & Application Security, Data Structures, Analysis of Algorithms, Emotional intelligence (EI), Comparative Programming Languages, Information Retrieval, Operating Systems, Web Programming, Mathematical Sciences, Statistical Inference, Natural Sciences & Technology, Social & Behavioral Sciences, Foundational & Research Fundamentals, Writing, Values and Ethical Reasoning, Civilization Studies, Culture and Belief, Humanities, Career Development, Business Management",
    link: "https://www.uopeople.edu/",
  },
  {
    title: "Associate of Science in Computer Science",
    university: "University of People",
    faculty: "",
    year: "2022 - 2024",
    techStack:
      "Mathematical Sciences, Statistical Inference, Natural Sciences & Technology, Social & Behavioral Sciences, Foundational & Research Fundamentals, Writing, Values and Ethical Reasoning, Civilization Studies, Culture and Belief, Humanities, Career Development, Business Management",
    link: "https://www.uopeople.edu/",
  },
  {
    title: "Technical Diploma in Interior architecture & Design",
    university: "Yemen-China Institute of Technical & Applied Science",
    faculty: "",
    year: "2016 - 2018",
    techStack:
      "Computer Applications in Design, Design and Forming Basics, Skatch, Geometric Drawing, Shadow and Perspective, Ornament, Interior Architecture Designs, Furnishing Styles, History of Public Art, Plumbing and Electrical Installations, Interior Decoration Materials, Mathematics, Physics, Chemistry, Occupational Safety and Health, Project Management",
    link: "https://www.facebook.com/qohalyib/",
  },
];

// Education component to display the education data
export default function Education() {
  // Array of booleans to track if the tech stack is expanded or not
  const [expanded, setExpanded] = useState(Array(education.length).fill(false));

  // Toggle the read more/less button
  const toggleReadMore = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index]; //
      return newExpanded;
    });
  };

  return (
    <section className="education-section">
      <h2 className="section-title">My Education</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3 className="education-title">{edu.title}</h3>
            <p className="education-university">
              <a href={edu.link} target="_blank" rel="noopener noreferrer">
                {edu.university}
              </a>
            </p>
            <p className="education-faculty">{edu.faculty}</p>
            <p className="education-year">{edu.year}</p>
            <p
              className={`education-tech-stack ${
                expanded[index] ? "expanded" : ""
              }`}
            >
              {edu.techStack}
            </p>
            <span className="read-more" onClick={() => toggleReadMore(index)}>
              {expanded[index] ? "Read less" : "Read more"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
