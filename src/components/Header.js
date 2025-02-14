const Header = () => {
  const closeMenu = () => {
    const checkbox = document.getElementById("checkboxmenu");
    if (checkbox) {
      checkbox.checked = false; // Cierra el menú
    }
  };

  return (
    <header>
      {/* Desktop Menu Starts */}
      <div className="header-inner hide-mobile">
        {/* MENU STARTS */}
        <div className="menu">
          <nav>
            <ul>
              <li>
                <span className="active" id="home-link">
                  Home
                </span>
              </li>
              <li>
                <span id="about-link">About</span>
              </li>

              <li>
                <span id="skills-link">Skills</span>
              </li>

              <li>
                <span id="experience-link">Experience</span>
              </li>

              <li>
                <span id="contact-link">Contact</span>
              </li>
            </ul>
          </nav>
        </div>
        {/* MENU ENDS */}
        {/* FREELANCE STARTS */}
        <div className="mail">
          <p>
            Email :<span> alberth_perez@outlook.com</span>
          </p>
        </div>
        {/* FREELANCE ENDS */}
      </div>
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
              <a href="#home" onClick={closeMenu}>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#my-photo" onClick={closeMenu}>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMenu}>
                <span>Experience</span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                <span>Contact</span>
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
