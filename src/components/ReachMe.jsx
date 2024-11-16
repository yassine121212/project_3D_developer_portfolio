import React from "react";
import { profiles } from "../constants";
import SocialCard from "./SocialCard";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const ReachMe = () => {
  return (
    <div className="min-h-1/2  py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Reach me on</p>
          <h2 className={styles.sectionHeadText}>Social media.</h2>
          <br />
        </motion.div>
        <div className=" grid  lg:grid-cols-3 grid-col-1  w-full   gap-8 justify-center  items-center">
          {profiles.map((profile) => (
            <SocialCard key={profile.platform} {...profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReachMe;
