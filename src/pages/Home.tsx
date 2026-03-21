import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="line">Welcome to My</span>
            <span className="line accent">Digital Portfolio</span>
          </h1>
          <p className="hero-subtitle">
            Full-stack developer | React enthusiast | System architecture
            advocate
          </p>
          <div className="hero-cta">
            <Link to="/about" className="btn btn-primary">
              Discover More
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="accent-box red"></div>
          <div className="accent-box pink"></div>
          <div className="accent-line"></div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <h2>Featured Areas</h2>
        <div className="featured-grid">
          <div className="featured-card">
            <h3>🔧 Technical Skills</h3>
            <p>React, C#, SQL, Docker, and more</p>
            <Link to="/skills">Explore →</Link>
          </div>
          <div className="featured-card">
            <h3>💼 Experience</h3>
            <p>Years of building robust systems</p>
            <Link to="/experience">View Timeline →</Link>
          </div>
          <div className="featured-card">
            <h3>📝 Blog</h3>
            <p>Thoughts on development & design</p>
            <Link to="/blog">Read Articles →</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Collaborate?</h2>
        <p>
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <Link to="/contact" className="btn btn-primary btn-large">
          Start a Conversation
        </Link>
      </section>
    </div>
  );
};
