import { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-width";
import Scrollbar from "smooth-scrollbar";
import { WOW } from "wowjs";

export const jqueryFunction = () => {
  const [width, setWidth] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // const width = useWindowWidth();
  const [isSafari, setIsSafari] = useState(false);

  //////////////////////////////////////////////
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  ///////////////////////////////////////////////

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    const headerInner = document.querySelector(".header-inner");
    const home = document.querySelector(".home");

    const timeout1 = setTimeout(() => {
      preloader?.classList.add("preloaded");
    }, 800);

    const timeout2 = setTimeout(() => {
      headerInner?.classList.add("animated", "fadeInDown");
    }, width > 1024 ? 1500 : 1100);

    const timeout3 = setTimeout(() => {
      home?.querySelector("h1 span")?.classList.add("animated", "fadeInUp");
      home?.querySelector(".intro")?.classList.add("animated", "fadeInUp");
      home?.querySelector(".cta")?.classList.add("animated", "fadeInUp");
    }, width > 1024 ? 2200 : 1800);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [width]);

;
};

  ////////////////////////////////////////////

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    const headerInner = document.querySelector(".header-inner");
    const home = document.querySelector(".home");

    setTimeout(() => {
      preloader?.classList.add("preloaded");
    }, 800);

    if (width > 1024) {
      setTimeout(() => {
        headerInner.classList.add("animated", "fadeInDown");
      }, 1500);
      setTimeout(() => {
        home.querySelector("h1 span").classList.add("animated", "fadeInUp");
        home.querySelector(".intro").classList.add("animated", "fadeInUp");
        home.querySelector(".cta").classList.add("animated", "fadeInUp");
      }, 2200);
    } else {
      setTimeout(() => {
        headerInner.classList.add("animated", "fadeInDown");
      }, 1100);
      setTimeout(() => {
        home.querySelector("h1 span").classList.add("animated", "fadeInUp");
        home.querySelector(".intro").classList.add("animated", "fadeInUp");
        home.querySelector(".cta").classList.add("animated", "fadeInUp");
      }, 1800);
    }
  }, [width]);

  useEffect(() => {
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    );
    setIsSafari(isSafariBrowser);
  }, []);

  useEffect(() => {
    if (isSafari) {
      document.body.classList.add("body-safari");
    }
  }, [isSafari]);

  useEffect(() => {
    const links = document.querySelectorAll('a[href="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
      });
    });
  }, []);

  useEffect(() => {
    const menuLinks = document.querySelectorAll("#menu li a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        history.replaceState(
          "",
          document.title,
          window.location.origin +
            window.location.pathname +
            window.location.search
        );
      });
    });
  }, []);

  useEffect(() => {
    if (width > 1024) {
      const scrollbar = Scrollbar.init(document.getElementById("wrapper"), {
        axis: "x",
        theme: "dark-3",
        keyboard: { enable: true, scrollType: "stepless" },
        advanced: {
          autoExpandHorizontalScroll: true,
        },
        mouseWheel: {
          scrollAmount: 400,
        },
        callbacks: {
          whileScrolling: () => {
            animateContent();
            checkScroll();
          },
        },
      });
    } else {
      new WOW.WOW().init();
    }
  }, [width]);

  const animateContent = () => {
    const divWidth =
      document.getElementById("wrapper").offsetWidth -
      window.innerWidth / 2 +
      270;
    const animated = document.querySelectorAll(".animated-layer");
    animated.forEach((anim) => {
      const offset = anim.offsetLeft;
      if (offset < divWidth) {
        // Image Reveal Animation
        if (anim.classList.contains("image-animation")) {
          anim.classList.add("animated");
        }
        // Fade In Up Animation
        else if (anim.classList.contains("fade-in-up-animation")) {
          anim.classList.add("animated", "fadeInUp");
        }
        // Fade In Animation
        else if (anim.classList.contains("fade-in-animation")) {
          anim.classList.add("animated", "fadeIn");
        }
        // Fade In Down Animation
        else if (anim.classList.contains("fade-in-down-animation")) {
          anim.classList.add("animated", "fadeInDown");
        }
        // Fade In Right Animation
        else if (anim.classList.contains("fade-in-right-animation")) {
          anim.classList.add("animated", "fadeInRight");
        }
        // Fade In Left Animation
        else if (anim.classList.contains("fade-in-left-animation")) {
          anim.classList.add("animated", "fadeInLeft");
        }
      }
    });
  };

  const checkScroll = () => {
    const homewidth = document.querySelector(".home").offsetWidth - 10;
    const aboutwidth =
      homewidth +
      document.querySelector(".about").offsetWidth +
      document.querySelector(".facts").offsetWidth -
      10;
    const portfoliowidth =
      aboutwidth +
      document.querySelector(".portfolio .single-item .main-content")
        .offsetWidth +
      document.querySelector(".portfolio .single-item .details").offsetWidth +
      250 +
      65 +
      300 +
      document.querySelector(".clients").offsetWidth -
      10;

    const contactwidth =
      portfoliowidth +
      document.querySelector(".contact").offsetWidth +
      document.querySelector(".testimonials").offsetWidth -
      10;
    const blogwidth =
      contactwidth +
      document.querySelector(".blog").offsetWidth +
      document.querySelector(".copyright").offsetWidth -
      10;

    const scrollbarContainer = document.querySelector(".mCSB_container");
    const scrollbarLeft = parseInt(scrollbarContainer.style.left);

    if (scrollbarLeft > homewidth && scrollbarLeft < aboutwidth) {
      document
        .querySelectorAll(".menu ul li span")
        .forEach((span) => span.classList.remove("active"));
      document.getElementById("about-link").classList.add("active");
    } else if (scrollbarLeft > aboutwidth && scrollbarLeft < portfoliowidth) {
      document
        .querySelectorAll(".menu ul li span")
        .forEach((span) => span.classList.remove("active"));
      document.getElementById("portfolio-link").classList.add("active");
    } else if (scrollbarLeft > portfoliowidth && scrollbarLeft < contactwidth) {
      document
        .querySelectorAll(".menu ul li span")
        .forEach((span) => span.classList.remove("active"));
      document.getElementById("contact-link").classList.add("active");
    } else if (scrollbarLeft > contactwidth && scrollbarLeft < blogwidth) {
      document
        .querySelectorAll(".menu ul li span")
        .forEach((span) => span.classList.remove("active"));
      document.getElementById("blog-link").classList.add("active");
    } else {
      document
        .querySelectorAll(".menu ul li span")
        .forEach((span) => span.classList.remove("active"));
      document.getElementById("home-link").classList.add("active");
    }
  };

  return <div>{/* Tu contenido aquí */}</div>;
};
