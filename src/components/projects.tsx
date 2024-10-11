"use client";
import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { projectsData } from "@/lib/data";
import Project from "./project-card";

export default function Projects() {
  const { ref } = useSectionInView("#project", 0.1);

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid xl:grid-cols-1 lg:text-start">
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
}
