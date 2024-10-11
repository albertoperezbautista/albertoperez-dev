"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";

const ScrollBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        "fixed",
        "bottom-32",
        "z-10",
        "w-[calc(100vw_-_300px)]",
        "mx-auto",
        "left-0",
        "right-0",
        "flex",
        "justify-between",
        "hide-mobile",
        scrollPosition > 200 && "bg-gray-900",
        scrollPosition > 400 && "text-white"
      )}
    >
      <div className="flex justify-between w-full items-center">
        <div className="h-2 w-full bg-gray-200 rounded" />
      </div>
    </div>
  );
};

export default ScrollBar;
