"use client";

import { useActiveSectionContext } from "@/containers/active-section";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [animated, setAnimated] = useState(false);
  const width = typeof window !== "undefined" ? window.innerWidth : 0;
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setAnimated(true);
      },
      width > 1024 ? 1500 : 1100
    );

    return () => clearTimeout(timeout);
  }, [width]);

  useEffect(() => {
    if (animated) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0,
        },
      });
    }
  }, [animated, controls]);

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.getElementById("home");
      const homeWidth = homeElement ? homeElement.offsetWidth - 10 : 0;

      const aboutElement = document.getElementById("my-photo");
      const factsElement = document.getElementById("facts");
      const aboutWidth =
        homeWidth +
        (aboutElement ? aboutElement.offsetWidth : 0) +
        (factsElement ? factsElement.offsetWidth : 0) -
        10;

      const portfolioElement = document.getElementById("portfolio");
      const clientsElement = document.getElementById("clients");
      const portfolioWidth =
        aboutWidth +
        (portfolioElement ? portfolioElement.offsetWidth : 0) +
        (clientsElement ? clientsElement.offsetWidth : 0) -
        10;

      const contactElement = document.getElementById("contact");
      const testimonialsElement = document.getElementById("testimonials");
      const contactWidth =
        portfolioWidth +
        (contactElement ? contactElement.offsetWidth : 0) +
        (testimonialsElement ? testimonialsElement.offsetWidth : 0) -
        10;

      const blogElement = document.getElementById("blog");
      const copyrightElement = document.getElementById("copyright");
      const blogWidth =
        contactWidth +
        (blogElement ? blogElement.offsetWidth : 0) +
        (copyrightElement ? copyrightElement.offsetWidth : 0) -
        10;

      const scrollPosition = window.scrollY;

      if (scrollPosition < homeWidth) {
        setActiveSection("#home");
      } else if (scrollPosition < aboutWidth) {
        setActiveSection("#about");
      } else if (scrollPosition < portfolioWidth) {
        setActiveSection("portfolio");
      } else if (scrollPosition < contactWidth) {
        setActiveSection("contact");
      } else if (scrollPosition < blogWidth) {
        setActiveSection("blog");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="header-inner hide-mobile"
      >
        {/* MENU STARTS */}

        <div className="menu">
          <nav>
            <ul>
              <li>
                <span
                  className={activeSection === "home" ? "active" : ""}
                  id="home-link"
                >
                  Home
                </span>
              </li>
              <li>
                <span
                  className={activeSection === "about" ? "active" : ""}
                  id="about-link"
                >
                  About
                </span>
              </li>
              <li>
                <span
                  className={activeSection === "portfolio" ? "active" : ""}
                  id="portfolio-link"
                >
                  Portfolio
                </span>
              </li>
              <li>
                <span
                  className={activeSection === "contact" ? "active" : ""}
                  id="contact-link"
                >
                  Contact
                </span>
              </li>
              <li>
                <span
                  className={activeSection === "blog" ? "active" : ""}
                  id="blog-link"
                >
                  Blog
                </span>
              </li>
            </ul>
          </nav>
        </div>

        {/* MENU ENDS */}
        {/* FREELANCE STARTS */}
        <div className="mail">
          <p>
            Email :<span> contact@steven.net</span>
          </p>
        </div>
        {/* FREELANCE ENDS */}
      </motion.div>
      {/* Desktop Menu Ends */}
      {/* Mobile Menu Starts */}
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" id="checkboxmenu" />
          <span />
          <span />
          <span />
          <ul className="list-unstyled" id="menu">
            <li>
              <a href="#home">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#my-photo">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a href="#blog">
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
    </header>
  );
};

export default Header;
