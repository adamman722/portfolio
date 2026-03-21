import { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    try {
      // Submit to Formspree (free email service)
      const response = await fetch("https://formspree.io/f/mgondjyd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage(
          "✅ Thank you! Your message has been sent. I'll get back to you soon.",
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatusMessage(
          "❌ Error: Failed to send email. Please try again or email me directly.",
        );
      }
    } catch (error) {
      setStatusMessage(
        "❌ Error: Could not send email. Please make sure you configured your Formspree form ID.",
      );
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/adamman722",
      icon: "🐙",
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/adam-tarpey-m/",
      icon: "💼",
      description: "Connect with me",
    },
    {
      name: "Email",
      url: "mailto:tarpeyadam@gmai.com",
      icon: "📧",
      description: "Send me an email",
    },
  ];

  return (
    <div className="contact">
      <section className="contact-container">
        <h1>Get In Touch</h1>
        <p className="contact-intro">
          I'm Adam, and I'm always open to new opportunities and collaborations.
          Feel free to reach out – I'd love to hear from you!
        </p>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send Me a Message</h2>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your-email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows={6}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {statusMessage && (
              <div
                className={`status-message ${statusMessage.startsWith("✅") ? "success" : "error"}`}
              >
                {statusMessage}
              </div>
            )}
          </form>

          <div className="contact-sidebar">
            <h2>Connect With Me</h2>
            <p>Choose your preferred way to get in touch</p>

            <div className="social-grid">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  title={link.name}
                >
                  <span className="social-icon">{link.icon}</span>
                  <h3>{link.name}</h3>
                  <p>{link.description}</p>
                </a>
              ))}
            </div>

            <div className="contact-info">
              <h3>Other Ways to Reach</h3>
              <p>Email: tarpeyadam@gmai.com</p>
              <p>Based in: Pontical Michigan, USA</p>
              <p>Timezone: EST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
