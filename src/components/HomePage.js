import React from 'react';
import './Homepage.css'

function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to StartupSprint</h1>
        <p>Fast-track financing for entrepreneurial dreams</p>
      </header>

      <section className="about-section">
        <h2>The entrepreneurial landscape is vibrant and dynamic</h2>
        <p>
          With an increasing number of aspiring entrepreneurs and innovative startup ideas 
          emerging globally, StartupSprint provides the necessary financial support to turn 
          those ideas into successful businesses.
        </p>
      </section>

      <section className="cta-section">
        <h2>Are you ready to bring your startup idea to life?</h2>
        <p>Join our platform today!</p>
        <button className="signup-btn">Get Started</button>
      </section>

      <footer className="footer">
        <p>&copy; 2024 StartupSprint. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
