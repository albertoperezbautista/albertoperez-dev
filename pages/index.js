"use client";
import Header from "@/src/components/Header";
import ScrollBar from "@/src/components/ScrollBar";
import About from "@/src/components/sections/About";
import Contact from "@/src/components/sections/Contact";
import Copyright from "@/src/components/sections/Copyright";
import Experience from "@/src/components/sections/Experiencie";
import Home from "@/src/components/sections/Home";
import Skills from "@/src/components/sections/Skills";
import Separator from "@/src/components/Separator";
import { jqueryFuntion } from "@/src/utilits";
import { Fragment, useEffect } from "react";
const Index = () => {
  useEffect(() => {
    jqueryFuntion();
  });

  return (
    <Fragment>
      <div className="page-content">
        <Header />
        <div id="wrapper">
          <main className="flex-column-mobile">
            <Home />
            <Separator type={"up"} />

            <About />
            <Separator type={"down"} />
            <Skills />
            <Separator type={"up"} />
            <Experience />

            {/* <Separator type={"down"} /> */}
            {/* <Portfolio /> */}
            {/* <Separator type={"up"} /> */}
            {/* <Testimonials /> */}
            <Separator type={"down"} />
            <Contact />
            <Separator type={"up"} />
            {/* <Clients /> */}
            {/* <Separator type={"up"} /> */}
            {/* <Blog /> */}
            {/* <Separator type={"down"} /> */}
            <Copyright />
          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
};
export default Index;
