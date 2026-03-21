import "./Blog.css";

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Coming Soon: Building Scalable React Applications",
      excerpt:
        "Exploring best practices and patterns for architecting large-scale React applications.",
      date: "Upcoming",
      category: "React",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Coming Soon: Component Library Design Patterns",
      excerpt:
        "Deep dive into creating maintainable and reusable component libraries.",
      date: "Upcoming",
      category: "Architecture",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Coming Soon: Automated Testing Strategies",
      excerpt:
        "Practical approaches to implementing comprehensive testing in your projects.",
      date: "Upcoming",
      category: "Testing",
      readTime: "6 min read",
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
          <h2>Blog Coming Soon</h2>
          <p>
            I'm currently working on writing insightful articles about
            development, architecture, and best practices.
          </p>
          <p>Check back soon for updates!</p>
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
                <button className="read-more" disabled>
                  Coming Soon
                </button>
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
