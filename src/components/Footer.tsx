import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "🐙", label: "GitHub", url: "https://github.com/adamman722" },
    {
      icon: "💼",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/adam-tarpey-m/",
    },
    { icon: "📧", label: "Email", url: "mailto:tarpeyadam@gmai.com" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Let's Connect</h3>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/#">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/experience">Experience</a>
              </li>
              <li>
                <a href="/skills">Skills</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Latest</h3>
            <p>Check back soon for blog posts and updates!</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Adam Tarpey. Built with React & TypeScript.
          </p>
          <p className="divider">|</p>
          <p>Gothic aesthetic meets modern development</p>
        </div>
      </div>
    </footer>
  );
};
