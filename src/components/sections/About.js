const About = () => {
  return (
    <>
      <section className="about main-section flex-column-mobile" id="about">
        <img
          alt=""
          className="separator hide-mobile"
          src="assets/separator.png"
        />
        {/* INFO HOLDER STARTS */}
        <div className="info flex-column-mobile">
          {/* IMAGE STARTS */}
          <div
            className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
            data-wow-offset={200}
            id="my-photo"
          >
            <div>
              <div>
                <img className="my-photo" src="assets/about.jpg" alt="" />
              </div>
            </div>
          </div>
          {/* IMAGE ENDS */}
          {/* INFO STARTS */}
          <div>
            <h2>
              <span>
                <span className="animated-layer fade-in-up-animation fadeInUp wow">
                  Alberto
                </span>
              </span>
              <span>
                <span className="animated-layer fade-in-up-animation fadeInUp wow">
                  Pérez
                </span>
              </span>
            </h2>
            <div className="infos">
              <ul>
                <li>
                  <span>
                    <span className="animated-layer fade-in-up-animation fadeInUp wow">
                      <span>Freelance :</span>
                      <span>Available</span>
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <span className="animated-layer fade-in-up-animation fadeInUp wow">
                      <span>Langages :</span>
                      <span>Spanish - English</span>
                    </span>
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <span>
                    <span className="animated-layer fade-in-up-animation fadeInUp wow">
                      <span>Phone :</span>
                      <span>+593 99 853 2625</span>
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <span className="animated-layer fade-in-up-animation fadeInUp wow">
                      <span>Email :</span>
                      <span>alberth_perez@outlook.com</span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* INFO ENDS */}
        </div>
        {/* INFO HOLDER ENDS */}
        {/* SKILLS STARTS */}
      </section>
    </>
  );
};
export default About;
