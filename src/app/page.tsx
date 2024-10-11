// "use client";
import { Fragment, useEffect } from "react";
// import { jqueryFuntion } from "@/lib/Utils";
import ScrollBar from "@/components/ScrollBar";
import Separator from "@/components/Separator";
import Header from "@/components/Header";
import Inicio from "@/components/Inicio";
import About from "@/components/about";

export default function Home() {
  // useEffect(() => {
  //   jqueryFuntion();
  // }, []);

  return (
    <Fragment>
      {/* <div className="page-content"> */}
      <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
        <Inicio />

        {/* <Separator type={"down"} /> */}
        {/* <Separator type={"up"} /> */}
        <About />
        {/*<Separator type={"down"} />
            <Facts />
            <Separator type={"up"} />
            <Portfolio />
            <Separator type={"down"} />
            <Testimonials />
            <Separator type={"up"} />
            <Contact />
            <Separator type={"down"} />
            <Clients />
            <Separator type={"up"} />
            <Blog />
            <Separator type={"down"} />
            <Copyright /> */}
      </main>
      {/* </div> */}
    </Fragment>
  );
}
