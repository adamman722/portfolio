import "./Skills.css";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "CSS/SCSS",
        "HTML5",
        "Responsive Design",
        "Component Architecture",
      ],
      icon: "🎨",
    },
    {
      title: "Backend & Database",
      skills: [
        "C#",
        ".NET",
        "SQL",
        "RESTful APIs",
        "Entity Framework",
        "Database Design",
      ],
      icon: "💾",
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Docker",
        "Jenkins",
        "Git",
        "CI/CD Pipelines",
        "Linux",
        "Cloud Platforms",
      ],
      icon: "🐳",
    },
    {
      title: "Testing & Quality",
      skills: [
        "Unit Testing",
        "Integration Testing",
        "Jest",
        "Automated Testing",
        "QA Processes",
        "Code Review",
      ],
      icon: "🧪",
    },
    {
      title: "Architecture & Patterns",
      skills: [
        "Component Libraries",
        "Design Systems",
        "Microservices",
        "SOLID Principles",
        "MVC Pattern",
        "State Management",
      ],
      icon: "🏗️",
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Communication",
        "Team Collaboration",
        "Documentation",
        "Mentoring",
        "Project Planning",
      ],
      icon: "💡",
    },
  ];

  return (
    <div className="skills">
      <section className="skills-container">
        <h1>Technical Skills & Expertise</h1>
        <p className="skills-intro">
          A comprehensive overview of my technical capabilities and areas of
          expertise
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h2>{category.title}</h2>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className="proficiency-section">
          <h2 style={{ color: "white" }}>Proficiency Levels</h2>
          <div className="proficiency-list">
            <div className="proficiency-item">
              <h3>Expert</h3>
              <p>React, TypeScript, Frontend Architecture, Component Design</p>
            </div>
            <div className="proficiency-item">
              <h3>Advanced</h3>
              <p>C#, SQL, Testing, Docker, Component Libraries</p>
            </div>
            <div className="proficiency-item">
              <h3>Intermediate</h3>
              <p>Jenkins, CI/CD, Backend Development, Design Systems</p>
            </div>
            <div className="proficiency-item">
              <h3>Learning</h3>
              <p>New frameworks and emerging technologies</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
