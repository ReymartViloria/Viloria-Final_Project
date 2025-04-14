"use client"

import { useState, useEffect } from "react"
import "./styles.css"
import AboutMe from "./components/AboutMe"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.body.classList.add("dark-mode")
    }
  }, [])

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove("dark-mode")
      localStorage.setItem("theme", "light")
      setDarkMode(false)
    } else {
      document.body.classList.add("dark-mode")
      localStorage.setItem("theme", "dark")
      setDarkMode(true)
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">My Portfolio</h1>
          <button className="mobile-menu-btn" aria-label="Toggle menu" onClick={toggleMobileMenu}>
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <button onClick={() => scrollToSection("about")} className="nav-link">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("education")} className="nav-link">
                  Education
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("experience")} className="nav-link">
                  Experience
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("skills")} className="nav-link">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="nav-link">
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <nav>
          <ul className="mobile-nav-list">
            <li>
              <button onClick={() => scrollToSection("about")} className="mobile-nav-link">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("education")} className="mobile-nav-link">
                Education
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("experience")} className="mobile-nav-link">
                Experience
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("skills")} className="mobile-nav-link">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="mobile-nav-link">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <main>
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="copyright">© {new Date().getFullYear()} Reymart N. Viloria. All rights reserved.</p>
        </div>
      </footer>

      {/* Theme Toggle Button */}
      <button className="theme-toggle" aria-label="Toggle dark mode" onClick={toggleTheme}>
        <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
      </button>
    </div>
  )
}

export default App
