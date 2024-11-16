import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import "./cstyle.css";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px]   w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full   p-[1px] rounded-[20px] shadow-sm"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="  card  rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain animate-spin "
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[19px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with over 5 years of experience in web
        design and development, specializing in both front-end (client-side) and
        back-end (server-side) development. Proficient in TypeScript and
        JavaScript, I have expertise in frameworks like React and Spring Boot,
        and a strong focus on creating efficient, scalable, and user-friendly
        solutions that address real-world problems. I excel at collaborating
        with clients to design and develop web applications from the study phase
        to their integration, tailored to their needs and specifications.
        Passionate about DevOps culture, I leverage tools like Kubernetes,
        Docker, and Infrastructure as Code with Terraform to enhance development
        processes. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
