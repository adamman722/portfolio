import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThreeBackground } from "./components/ThreeBackground";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Skills } from "./pages/Skills";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import "./styles/globals.css";
import "./App.css";

function App() {
  return (
    <>
      <ThreeBackground />
      <Router>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
