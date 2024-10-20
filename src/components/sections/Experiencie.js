const Experience = () => {
  return (
    <section className="about resume flex-column-mobile " id="resume">
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
      {/* TITLE STARTS */}
      <div className="custom-title fadeInUp wow">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation">
              Experience
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* TIMELINE STARTS */}
      <div className="timeline">
        <ol className="animated-layer fade-in-animation">
          {/* TIMELINE ITEM STARTS */}
          <li>
            <div className="animated-layer fade-in-down-animation fadeInUp wow">
              <div className="experience">
                <h4>Full Stack Developer</h4>
                <p>
                  <i className="fa-regular fa-clock" />
                  <span>10/2022 - 12/2023</span>
                </p>
                <p>
                  <i className="fa-regular fa-building" />
                  <span>Panamerican Health Organization</span>
                </p>
              </div>
            </div>
          </li>
          {/* TIMELINE ITEM ENDS */}
          {/* TIMELINE ITEM STARTS */}
          <li>
            <div className="animated-layer fade-in-up-animation fadeInUp wow">
              <div className="experience">
                <h4>Development Expert Full Stack Developer</h4>
                <p>
                  <i className="fa-regular fa-clock" />
                  <span>11/2017 - 12/2022</span>
                </p>
                <p>
                  <i className="fa-regular fa-building" />
                  <span>SRI - National Tax Agency</span>
                </p>
              </div>
            </div>
          </li>
          {/* TIMELINE ITEM ENDS */}
          {/* TIMELINE ITEM STARTS */}
          <li>
            <div className="animated-layer fade-in-down-animation fadeInUp wow">
              <div className="experience">
                <h4>Development Expert Full Stack Developer</h4>
                <p>
                  <i className="fa-regular fa-clock" />
                  <span>03/2015 - 04/2017</span>
                </p>
                <p>
                  <i className="fa-regular fa-building" />
                  <span>National Tax Agency</span>
                </p>
              </div>
            </div>
          </li>
          {/* TIMELINE ITEM ENDS */}
          {/* TIMELINE ITEM STARTS */}
          <li>
            <div className="animated-layer fade-in-up-animation fadeInUp wow">
              <div className="education">
                <h4>Master Degree</h4>
                <p>
                  <i className="fa-regular fa-clock" />
                  <span>2020</span>
                </p>
                <p>
                  <i className="fa-solid fa-building-columns" />
                  <span>Rioja University</span>
                </p>
              </div>
            </div>
          </li>
          {/* TIMELINE ITEM ENDS */}
          {/* TIMELINE ITEM STARTS */}
          <li>
            <div className="animated-layer fade-in-down-animation fadeInUp wow">
              <div className="experience">
                <h4>Software Developer</h4>
                <p>
                  <i className="fa-regular fa-clock" />
                  <span>05/2013 - 02/2015</span>
                </p>
                <p>
                  <i className="fa-solid fa-building-columns" />
                  <span>Banks Regulatory Institute</span>
                </p>
              </div>
            </div>
          </li>
          {/* TIMELINE ITEM ENDS */}
          <li />
        </ol>
      </div>
      {/* TIMELINE ENDS */}
      {/* RESUME ENDS */}
    </section>
  );
};
export default Experience;
