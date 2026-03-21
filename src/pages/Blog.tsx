import "./Blog.css";

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Just Fucking Use React (Or Any Framework, You Goddamn Luddite)",
      excerpt:
        "A passionate argument for when and why to use modern JavaScript frameworks. Addressing common misconceptions about complexity, performance, and the real challenges of building interactive web applications.",
      date: "March 2026",
      category: "React",
      readTime: "15 min read",
      link: "https://justfuckingusereact.com/",
      full: true,
    },
    {
      id: 2,
      title: "Vite 8.0 is out!",
      excerpt:
        "Vite 8 ships with Rolldown as its single, unified, Rust-based bundler, delivering up to 10-30x faster builds while maintaining full plugin compatibility. This is the most significant architectural change since Vite 2.",
      date: "March 12, 2026",
      category: "Web Dev",
      readTime: "8 min read",
      link: "https://vite.dev/blog/announcing-vite8.html",
      full: true,
    },
    {
      id: 3,
      title: "Pokemon Cards V2: Advanced CSS 3D Effects",
      excerpt:
        "A stunning showcase of realistic Pokemon card effects using CSS 3D transforms, gradients, blend modes, and cursor-based interactions. Demonstrates advanced CSS techniques for creating dynamic, interactive UI.",
      date: "March 2026",
      category: "CSS",
      readTime: "12 min read",
      link: "https://poke-holo.simey.me/?ref=dailydev",
      full: true,
    },
    {
      id: 4,
      title: "Read That F*cking Code!",
      excerpt:
        "A critical guide on responsible vibe-coding with AI. Explores the risks of not reviewing AI-generated code and practical strategies for maintaining code quality, security, and architectural integrity while leveraging AI speed.",
      date: "August 3, 2025",
      category: "AI & Development",
      readTime: "11 min read",
      link: "https://etsd.tech/posts/rtfc/?ref=dailydev",
      full: true,
    },
  ];

  return (
    <div className="blog">
      <section className="blog-container">
        <h1>Blog & Articles</h1>
        <p className="blog-intro">
          Thoughts, insights, and tutorials about frontend development and
          software architecture
        </p>

        <div className="blog-empty-state">
          <div className="empty-icon">📝</div>
          <h2>Articles that I think are neat :)</h2>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-header">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="blog-footer">
                <span className="read-time">{post.readTime}</span>
                {post.full ? (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                  >
                    Read More →
                  </a>
                ) : (
                  <button className="read-more" disabled>
                    Coming Soon
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        <section className="blog-cta">
          <h2>Stay Updated</h2>
          <p>
            Follow my social media for updates when new articles are published
          </p>
          <div className="social-preview">
            <p>LinkedIn • GitHub</p>
          </div>
        </section>
      </section>
    </div>
  );
};
