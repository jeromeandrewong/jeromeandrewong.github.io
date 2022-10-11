import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="w-full h-screen  flex items-center justify-center">
        <div className="w-[90%] max-w-xl text-center py-[50px] px-[35px] bg-white bg-opacity-50 backdrop-blur-lg rounded drop-shadow-xl">
          <h2 className="text-3xl font-bold tracking-widest mt-5">Skills</h2>
          <p className="text-md max-w-sm mx-auto tracking-tight m-3">
            Technologies that I&apos;ve picked up along the way.
          </p>
          <div className="grid grid-cols-4 gap-3 m-5">
            <Skill img="html.png" />
            <Skill img="css.png" />
            <Skill img="sass.png" />
            <Skill img="python.png" />
            <Skill img="tailwind.png" />
            <Skill img="javascript.png" />
            <Skill img="react.png" />
            <Skill img="typescript.png" />
            <Skill img="vue.png" />
            <Skill img="node.png" />
            <Skill img="git.png" />
            <Skill img="figma.png" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
