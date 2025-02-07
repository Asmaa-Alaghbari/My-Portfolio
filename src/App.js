import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Language from "./Language";
import Navbar from "./Navbar";

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
