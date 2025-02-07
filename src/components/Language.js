import React from "react";
import "./Language.css";

// Lanuage data
const languages = [
  {
    title: "Arabic",
    proficiency: "Native proficiency",
  },
  {
    title: "English",
    proficiency: "Professional working proficiency",
  },
  {
    title: "Romanian",
    proficiency: "Professional working proficiency",
  },
  {
    title: "German",
    proficiency: "Elementary proficiency",
  },
];

// Language component to display the language data
export default function Language() {
  return (
    <section className="language-section">
      <h2 className="section-title">My Languages</h2>
      <ul className="language-grid">
        {languages.map((language, index) => (
          <li key={index} className="language-item">
            <h3>{language.title}</h3>
            <p>{language.proficiency}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
