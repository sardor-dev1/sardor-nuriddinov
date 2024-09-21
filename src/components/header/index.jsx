import { useState, useEffect } from "react";
import "./style.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.7, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header
      className={`header z-40 fixed text-white w-full h-[60px] flex items-center ${
        scrolled ? "scrolled" : "transparent"
      }`}
    >
      <nav className="container">
        <ul className="flex items-center gap-5">
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#blogs"
              className={activeSection === "blogs" ? "active" : ""}
            >
              Blogs
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
