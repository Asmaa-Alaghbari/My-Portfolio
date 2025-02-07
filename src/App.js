import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Language from "./components/Language";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/language" element={<Language />} />
          <Route
            path="*"
            element={
              <div className="notFound">
                <h2>404 - Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
                <p>
                  Please check the URL or click the link below to go back to the{" "}
                  <a href="/">Homepage</a>.
                </p>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
