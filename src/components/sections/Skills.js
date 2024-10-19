const Skills = () => {
  return (
    <>
      <section
        className="about skills  main-section flex-column-mobile "
        id="skills"
      >
        {/* SKILLS STARTS */}
        <div className="skills flex-column-mobile">
          {/* TITLE STARTS */}
          <div className="custom-title">
            {/* MAIN TITLE STARTS */}
            <h3>
              <span>
                <span className="animated-layer fade-in-left-animation fadeInUp wow">
                  My Skills
                </span>
              </span>
            </h3>
            {/* MAIN TITLE ENDS */}
          </div>
          {/* TITLE ENDS */}
          <div className="skills-content">
            <div>
              {/* SKILL ITEM STARTS */}
              <div className="animated-layer fade-in-down-animation fadeInLeft wow">
                <span>
                  <i className="devicon-spring-plain" />
                </span>
                <h4>SpringBoot</h4>
              </div>
              {/* SKILL ITEM ENDS */}
              {/* SKILL ITEM STARTS */}
              <div className="animated-layer fade-in-down-animation fadeInLeft wow">
                <span>
                  <i className="devicon-nodejs-plain" />
                </span>
                <h4>Node</h4>
              </div>
              <div className="animated-layer fade-in-up-animation fadeInRight wow">
                <span>
                  <i className="devicon-oracle-plain" />
                </span>
                <h4>Oracle</h4>
              </div>
              {/* SKILL ITEM ENDS */}
            </div>
            <div>
              {/* SKILL ITEM STARTS */}
              <div className="animated-layer fade-in-down-animation fadeInLeft wow">
                <span>
                  <i className="devicon-java-plain" />
                </span>
                <h4>Java</h4>
              </div>
              {/* SKILL ITEM ENDS */}
              {/* SKILL ITEM STARTS */}
              <div className="animated-layer fade-in-up-animation fadeInRight wow">
                <span>
                  <i className="devicon-nestjs-plain" />
                </span>
                <h4>Nest JS</h4>
              </div>
              <div className="animated-layer fade-in-up-animation fadeInRight wow">
                <span>
                  <i className="devicon-postgresql-plain" />
                </span>
                <h4>PostgreSql</h4>
              </div>
              {/* SKILL ITEM ENDS */}
            </div>
            <div>
              {/* SKILL ITEM STARTS */}
              <div className="animated-layer fade-in-down-animation fadeInLeft wow">
                <span>
                  <i className="devicon-react-plain" />
                </span>
                <h4>React JS</h4>
              </div>
              {/* SKILL ITEM ENDS */}
              {/* SKILL ITEM STARTS */}
              <div className="animated-layer fade-in-up-animation fadeInRight wow">
                <span>
                  <i className="devicon-python-plain" />
                </span>
                <h4>Python</h4>
              </div>
              <div className="animated-layer fade-in-up-animation fadeInRight wow">
                <span>
                  <i className="devicon-mongodb-plain" />
                </span>
                <h4>Mongo</h4>
              </div>
              {/* SKILL ITEM ENDS */}
            </div>
            <div>
              {/* SKILL ITEM STARTS */}
              <div className="animated-layer fade-in-down-animation fadeInLeft wow">
                <span>
                  <i className="devicon-nextjs-plain" />
                </span>
                <h4>NextJS</h4>
              </div>
              {/* SKILL ITEM ENDS */}
              {/* SKILL ITEM STARTS */}
              <div className="animated-layer fade-in-up-animation fadeInRight wow">
                <span>
                  <i className="devicon-sass-plain" />
                </span>
                <h4>Sass</h4>
              </div>
              <div className="animated-layer fade-in-up-animation fadeInRight wow">
                <span>
                  <i className="devicon-docker-plain" />
                </span>
                <h4>Docker</h4>
              </div>
              {/* SKILL ITEM ENDS */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
