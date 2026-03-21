import "./Gallery.css";

export const Gallery = () => {
  // Artwork pieces - customize this array with your own work!
  const artworks = [
    {
      id: 1,
      title: "Your First Artwork",
      description: "Add a description of your artwork here",
      image: "https://via.placeholder.com/400x300?text=Artwork+1",
      category: "Design",
      tools: ["Figma", "Adobe XD"],
      link: "#",
    },
    {
      id: 2,
      title: "Your Second Artwork",
      description: "Describe the design process and inspiration",
      image: "https://via.placeholder.com/400x300?text=Artwork+2",
      category: "Illustration",
      tools: ["Procreate", "Photoshop"],
      link: "#",
    },
    {
      id: 3,
      title: "Your Third Artwork",
      description: "Share what makes this piece special",
      image: "https://via.placeholder.com/400x300?text=Artwork+3",
      category: "UI Design",
      tools: ["Figma", "CSS"],
      link: "#",
    },
    {
      id: 4,
      title: "Your Fourth Artwork",
      description: "Describe the project and your role",
      image: "https://via.placeholder.com/400x300?text=Artwork+4",
      category: "Web Design",
      tools: ["React", "CSS", "TypeScript"],
      link: "#",
    },
    {
      id: 5,
      title: "Your Fifth Artwork",
      description: "Talk about the design decisions made",
      image: "https://via.placeholder.com/400x300?text=Artwork+5",
      category: "Branding",
      tools: ["Illustrator", "InDesign"],
      link: "#",
    },
    {
      id: 6,
      title: "Your Sixth Artwork",
      description: "Share the impact and results",
      image: "https://via.placeholder.com/400x300?text=Artwork+6",
      category: "Motion",
      tools: ["After Effects", "Premiere"],
      link: "#",
    },
  ];

  // Get unique categories
  const categories = ["All", ...new Set(artworks.map((art) => art.category))];

  return (
    <div className="gallery">
      <section className="gallery-container">
        <h1>Gallery & Artwork</h1>
        <p className="gallery-intro">
          A showcase of my creative work and design projects
        </p>

        {/* Category Filter (optional - can be implemented later) */}
        <div className="category-filters">
          {categories.map((category) => (
            <button key={category} className="filter-btn active">
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {artworks.map((artwork) => (
            <article key={artwork.id} className="gallery-card">
              <div className="card-image">
                <img src={artwork.image} alt={artwork.title} />
                <div className="card-overlay">
                  <div className="overlay-content">
                    <h3>{artwork.title}</h3>
                    <p className="card-description">{artwork.description}</p>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <div className="card-header">
                  <h2>{artwork.title}</h2>
                  <span className="card-category">{artwork.category}</span>
                </div>

                <p className="card-description">{artwork.description}</p>

                <div className="card-tools">
                  {artwork.tools.map((tool, idx) => (
                    <span key={idx} className="tool-tag">
                      {tool}
                    </span>
                  ))}
                </div>

                <a href={artwork.link} className="card-link">
                  View Project →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <section className="gallery-cta">
          <h2>Want to See More?</h2>
          <p>
            Check out my latest projects on GitHub or follow my creative journey
            on social media
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary">
              Visit GitHub
            </a>
            <a href="#" className="btn btn-secondary">
              View on Dribbble
            </a>
          </div>
        </section>
      </section>
    </div>
  );
};
