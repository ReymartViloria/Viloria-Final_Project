const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          <div className="education-item">
            <div className="education-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="education-content">
              <h3 className="education-degree">Master of Science in Computer Science</h3>
              <p className="education-institution">Stanford University, Stanford, CA</p>
              <div className="education-period">
                <i className="fas fa-calendar-alt"></i>
                <span>2018 - 2020</span>
              </div>
              <p className="education-description">
                Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.
              </p>
            </div>
          </div>
          <div className="education-item">
            <div className="education-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="education-content">
              <h3 className="education-degree">Bachelor of Science in Software Engineering</h3>
              <p className="education-institution">Massachusetts Institute of Technology, Cambridge, MA</p>
              <div className="education-period">
                <i className="fas fa-calendar-alt"></i>
                <span>2014 - 2018</span>
              </div>
              <p className="education-description">
                Focused on software development methodologies and programming paradigms. Participated in multiple
                hackathons and coding competitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
