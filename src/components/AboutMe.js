const AboutMe = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <div className="profile-img-container">
            <img src="/placeholder.svg?height=256&width=256" alt="Profile" className="profile-img" />
          </div>
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              I am a passionate web developer with a focus on building efficient and user-friendly applications. With a
              strong foundation in modern web technologies, I enjoy creating responsive and accessible websites that
              provide exceptional user experiences.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <i className="fas fa-user"></i>
                <span>Reymart N. Viloria</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Baguio City</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-calendar"></i>
                <span>Available for freelance</span>
              </div>
            </div>
            <div className="cta-container">
              <a href="#contact" className="btn primary-btn">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
