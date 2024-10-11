"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      id="preloader"
      className={loaded ? "preloader preloaded" : "preloader"}
    >
      <div className="line" />
    </div>
  );
};
export default Preloader;
