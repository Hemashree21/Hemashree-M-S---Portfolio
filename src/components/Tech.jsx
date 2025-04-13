import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// You can define your own animation for each ball
const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.5) => ({
  initial: {
    opacity: 0,
    y: direction === "up" ? 40 : -40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type,
      delay,
      duration,
    },
  },
});

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-left`}>🛠️ Tech I Use</p>
        <h2 className={`${styles.sectionHeadText} text-left`}>Tech Stack</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-16">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.id}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            initial="initial"
            animate="animate"
            className="w-28 h-28"
          >
            {technology.icon ? (
              <BallCanvas icon={technology.icon} />
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
