"use client";
import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { AiOutlineHome, AiOutlineMenu, AiOutlineSetting } from "react-icons/ai";

export default function Tablet() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 100 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
    >
      <div className="container mx-auto">
        <div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex justify-between">
            <AiOutlineMenu
              size={24}
              className="text-gray-700 dark:text-white"
            />
            <SectionHeading>About me</SectionHeading>
            <AiOutlineSetting
              size={24}
              className="text-gray-700 dark:text-white"
            />
          </div>
          <div className="grid xl:grid-cols-2 lg:text-start">
            <div className="flex-1">
              <div className="text-lg mt-12 xl:mt-3">
                <div className="flex justify-start flex-col">
                  <Fade
                    direction="up"
                    delay={400}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                  >
                    <h3 className="font-bold mt-6">Our Mission</h3>
                  </Fade>

                  <Fade
                    direction="up"
                    delay={600}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                  >
                    <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                      We believe that a website is the foundation of a
                      successful online presence, and our goal is to help
                      bussinesses establish a strong digital presence. Our
                      process begin with understanding your needs and goals, and
                      then we work closely with you.
                    </p>
                  </Fade>

                  <Fade
                    direction="up"
                    delay={800}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                  >
                    <h3 className="font-bold mt-6">Our Vision</h3>
                  </Fade>

                  <Fade
                    direction="up"
                    delay={1000}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                  >
                    <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                      We then use this information to create a custom website
                      that not only reflects your brand but also helps you
                      achieve your business objectives. We
                    </p>
                  </Fade>
                </div>
              </div>
            </div>

            <Fade
              direction="right"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4">
                <Image
                  src={"/about.png"}
                  alt="about me"
                  width={600}
                  height={600}
                  quality={100}
                  priority={true}
                  className="rounded-full mt-8 object-cover"
                />
              </div>
            </Fade>
          </div>
          <div className="flex justify-between mt-4">
            <AiOutlineHome
              size={24}
              className="text-gray-700 dark:text-white"
            />
            <div className="flex">
              <div className="w-2 h-2 bg-gray-700 dark:bg-white rounded-full mr-2" />
              <div className="w-2 h-2 bg-gray-700 dark:bg-white rounded-full mr-2" />
              <div className="w-2 h-2 bg-gray-700 dark:bg-white rounded-full" />
            </div>
            <AiOutlineSetting
              size={24}
              className="text-gray-700 dark:text-white"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
