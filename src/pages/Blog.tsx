import "./Blog.css";

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
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
      id: 2,
      title: "Coming Soon: Building Scalable React Applications",
      excerpt:
        "Exploring best practices and patterns for architecting large-scale React applications.",
      date: "Upcoming",
      category: "React",
      readTime: "5 min read",
      full: false,
    },
    {
      id: 3,
      title: "Coming Soon: Component Library Design Patterns",
      excerpt:
        "Deep dive into creating maintainable and reusable component libraries.",
      date: "Upcoming",
      category: "Architecture",
      readTime: "8 min read",
      full: false,
    },
    {
      id: 4,
      title: "Coming Soon: Automated Testing Strategies",
      excerpt:
        "Practical approaches to implementing comprehensive testing in your projects.",
      date: "Upcoming",
      category: "Testing",
      readTime: "6 min read",
      full: false,
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
            <p>LinkedIn • Twitter • GitHub</p>
          </div>
        </section>
      </section>
    </div>
  );
};
