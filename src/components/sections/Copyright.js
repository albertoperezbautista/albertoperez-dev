const Copyright = () => {
  return (
    <section className="copyright" id="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Alberto Pérez</span>

        <ul>
          <li>
            <a href="https://github.com/albertoperezbautista">
              <i className="fa-brands fa-github" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/albertoperezbautista/">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
