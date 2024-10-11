"use client";

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import SubmitBtn from "./submit-btn";
import { Fade } from "react-awesome-reveal";

const fadeInAnimationVariants = {
  // Define las variantes de animación para el efecto de desvanecimiento
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 * index },
  }),
};

export default function Contact() {
  const { ref } = useSectionInView("#contact");

  return (
    <motion.section
      ref={ref}
      id="skills"
      // className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <SectionHeading>{"Contact me"}</SectionHeading>
      </Fade>

      <Fade
        direction="up"
        delay={600}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          {"Feel free to contact me directly through this form"}
        </p>
      </Fade>

      <Fade
        direction="up"
        delay={800}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <form className="mt-10 flex flex-col dark:text-black">
          <input
            className="h-14 px-4 rounded-lg border-black dark:bg-white dark:text-black"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <input
            className="h-52 my-3 rounded-lg resize-none border-black p-4 dark:bg-white dark:text-black"
            name="message"
            type="email"
            required
            maxLength={5000}
            placeholder="Your email"
          />
          <SubmitBtn text="Send" onClick={() => console.log("enviado")} />
        </form>
      </Fade>
    </motion.section>
  );
}
