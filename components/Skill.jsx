import React from "react";
import { motion } from "framer-motion";
import typescript from "../public/typescript.png";
import Image from "next/image";

const Skill = ({ img }) => {
  let directionLeft = true;
  return (
    <div className="flex cursor-pointer m-1 justify-center items-center">
      <motion.img
        initial={{ x: directionLeft ? -150 : 150, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={img}
        className="  border-gray-500 w-12 h-12 "
      />
    </div>
  );
};

export default Skill;
