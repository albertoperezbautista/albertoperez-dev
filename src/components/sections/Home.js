const Home = () => {
  return (
    <>
      <section className="home main-section flex-column-mobile" id="home">
        <div>
          <div className="position-relative">
            <h1>
              <span>
                <span className="animated-layer">
                  Hello<span>.</span>
                </span>
              </span>
              <span className="position-relative">
                <span className="animated-layer">I am</span>
                <span className="intro animated-layer">
                  FullStack Developer with 10 years experience
                </span>
              </span>
              <span>
                <span className="animated-layer">Alberto Pérez</span>
              </span>
            </h1>
          </div>
        </div>
        {/* CALL TO ACTION STARTS */}
        <span className="animated-layer animated-btn cta" id="cta">
          <span></span>
        </span>
        {/* CALL TO ACTION ENDS */}
      </section>
    </>
  );
};
export default Home;
