import { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import "./style.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`header z-40 fixed text-white w-full h-[60px] flex items-center justify-between ${
        scrolled ? "scrolled" : "transparent"
      }`}
    >
      <nav className="container flex justify-between items-center w-full">
        <div className="logo">
          <img className="w-[40px] object-contain" src={Logo} alt="logo" />
        </div>
        <ul
          className={`nav-links flex items-center gap-5 ${
            menuOpen ? "open" : ""
          }`}
        >
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeSection === "experience" ? "active" : ""}
              onClick={toggleMenu}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#works"
              className={activeSection === "works" ? "active" : ""}
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
