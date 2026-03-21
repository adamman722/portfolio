import "./About.css";

export const About = () => {
  return (
    <div className="about">
      <section className="about-container">
        <h1>About Me</h1>

        <div className="about-content">
          <div className="about-text">
            <h2>Who I Am</h2>
            <p>
              I'm a bubbly and approachable developer with a passion for
              accessibility and creating beautiful, engaging websites that scale
              seamlessly across all devices. I believe in the power of clean
              code, responsive design, and making technology accessible to
              everyone. With a background ranging from automation to testing to
              modern web development, I bring a unique perspective to every
              project.
            </p>

            <h2>My Journey</h2>
            <p>
              I started my development journey with a simple goal: automate
              things to make my life easier. That led me to keyboard bots, which
              sparked my love for automation. After formal training, my passion
              evolved into automated testing and QA, and eventually blossomed
              into my true love—creating beautiful, scalable websites that
              delight users. Each phase taught me something crucial, and now I
              combine all these experiences into comprehensive, thoughtful
              solutions.
            </p>

            <h2>What Drives Me</h2>
            <p>
              I'm driven by accessibility and the belief that great websites
              should be engaging, responsive, and usable for everyone. But
              beyond code, I'm passionate about helping others adopt the
              developer mindset—thinking logically and solving problems
              systematically. I've had the privilege of helping over 200 people
              get into IT roles, and being part of UWM's #1 training team. My
              playful work style makes collaboration fun, and I genuinely love
              lifting others up while building amazing things.
            </p>
          </div>

          <div className="about-highlights">
            <h3>Key Areas</h3>
            <ul className="highlights-list">
              <li>
                <span className="highlight-icon">🎨</span>
                <div>
                  <h4>Accessibility & UX</h4>
                  <p>Beautiful, scaleable, responsive design</p>
                </div>
              </li>
              <li>
                <span className="highlight-icon">🧪</span>
                <div>
                  <h4>Automated Testing</h4>
                  <p>QA automation & quality assurance</p>
                </div>
              </li>
              <li>
                <span className="highlight-icon">🌐</span>
                <div>
                  <h4>Modern Web Dev</h4>
                  <p>React, TypeScript & component design</p>
                </div>
              </li>
              <li>
                <span className="highlight-icon">🎓</span>
                <div>
                  <h4>Teaching & Mentoring</h4>
                  <p>Helping others think like engineers</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="about-content interests-section">
          <div className="about-text">
            <h2>When I'm Not Coding</h2>
            <p>
              When I'm not at the keyboard, I channel my creative side into
              various hobbies. I love painting and drawing—it keeps my eye for
              design sharp. I'm an avid model builder, with a particular passion
              for Gundam and Evangelion units (yes, I'm that person with the
              collection). I'm also a competitive Magic: The Gathering player,
              and I spend my downtime reading and tinkering with one-off tech
              projects. These hobbies keep me balanced and feed my creative
              problem-solving mindset.
            </p>
          </div>

          <div className="about-highlights">
            <h3>My Interests</h3>
            <ul className="highlights-list">
              <li>
                <span className="highlight-icon">🎨</span>
                <div>
                  <h4>Painting & Drawing</h4>
                  <p>Digital and traditional art</p>
                </div>
              </li>
              <li>
                <span className="highlight-icon">🤖</span>
                <div>
                  <h4>Model Crafting</h4>
                  <p>Gundam & Evangelion collections</p>
                </div>
              </li>
              <li>
                <span className="highlight-icon">🃏</span>
                <div>
                  <h4>Magic: The Gathering</h4>
                  <p>Competitive gameplay & deck building</p>
                </div>
              </li>
              <li>
                <span className="highlight-icon">📚</span>
                <div>
                  <h4>Tech Tinkering</h4>
                  <p>One-off projects & reading</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
