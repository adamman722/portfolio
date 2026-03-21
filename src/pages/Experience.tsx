import "./Experience.css";

export const Experience = () => {
  const experiences = [
    {
      role: "Front End Developer II",
      company: "UWM",
      period: "2021 - Present",
      description:
        "Built and deployed three standalone microservices using React and NextJS, leveraging Module Federation to create cohesive micro-frontend applications Developed in-house React component library to standardize UI elements across 10+ applications, improving visual consistency and supporting developer efficiency. Collaborated with UX and architecture teams to design and launch three greenfield mortgage applications, improving user engagement and streamlining processes. Developed backend microservices using C#/.NET Core and EF Core, implementing REST and GraphQL APIs for seamless data transmission",
      highlights: [
        "React & TypeScript",
        "NextJS",
        "C# Backend",
        "React Frontend",
        "SQL Databases",
      ],
    },
    {
      role: "Technical Trainer",
      company: "UWM",
      period: "2022 - 2024",
      description:
        "As part of the #1 training team I helped designed 8-week program on advanced front end development topics, equipping developers with in-depth knowledge to advance their careers. Collaborated as front end developer and technical trainer to develop curriculum for aspiring IT professionals, enhancing their skills for industry readiness.",
      highlights: [
        "C# Backend",
        "React Frontend",
        "SQL Databases",
        "Automated Testing",
        "Selenium",
        "Playwright",
      ],
    },
  ];

  return (
    <div className="experience">
      <section className="experience-container">
        <h1>Work Experience</h1>
        <p className="experience-intro">
          A timeline of my professional journey and key accomplishments
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index !== experiences.length - 1 && (
                  <div className="timeline-line"></div>
                )}
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h2>{exp.role}</h2>
                  <span className="company">{exp.company}</span>
                </div>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
                <div className="highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-badge">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="education-section">
          <h2>Education & Certifications</h2>
          <div className="education-grid">
            <div className="education-card">
              <h3>📜 Certification</h3>
              <p>Meta Front-End Developer</p>
              <p className="year">Completed: 2023</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
