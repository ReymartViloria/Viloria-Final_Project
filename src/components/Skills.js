"use client"

import { useState } from "react"

const Skills = () => {
  const [activeTab, setActiveTab] = useState("software")

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-tabs">
          <button
            className={`skill-tab ${activeTab === "software" ? "active" : ""}`}
            onClick={() => handleTabClick("software")}
          >
            <i className="fas fa-code"></i>
            <span>Software</span>
          </button>
          <button
            className={`skill-tab ${activeTab === "hardware" ? "active" : ""}`}
            onClick={() => handleTabClick("hardware")}
          >
            <i className="fas fa-tools"></i>
            <span>Hardware</span>
          </button>
        </div>
        <div className="skills-content">
          <div className={`skills-tab-content ${activeTab === "software" ? "active" : ""}`} id="software-skills">
            <h3 className="skills-category-title">Software Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">HTML</span>
                  <span className="skill-percentage">30%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: "30%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">CSS</span>
                  <span className="skill-percentage">30%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: "30%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Java</span>
                  <span className="skill-percentage">20%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: "20%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">SQL</span>
                  <span className="skill-percentage">60%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Photo Editing</span>
                  <span className="skill-percentage">70%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Video Editing</span>
                  <span className="skill-percentage">60%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`skills-tab-content ${activeTab === "hardware" ? "active" : ""}`} id="hardware-skills">
            <h3 className="skills-category-title">Hardware Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">PC Build & Repair Specialist</span>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
