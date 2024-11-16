import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import "./cstyle.css";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      className={`relative w-full  h-screen mx-auto  backdrop-blur-sm  `}
    >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#5623c2] " />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div class="card">
          <div class="p-3 md:p-5 lg:p-7">
            <h1 className={`${styles.heroHeadText} text-white drop-shadow-lg`}>
              Hi, I'm{" "}
              <span className="text-[#5623c2] [text-shadow:#ff0000] ">
                Yassine
              </span>
            </h1>
            <p
              className={`${styles.heroSubText} drop-shadow-lg 	   mt-2 text-white-100`}
            >
              Full Stack Software Engineer <br className="sm:block hidden" />
              <TypeAnimation
                sequence={[
                  "I develop web and mobile applications",
                  1000, // Wait for 1 second
                  "I build scalable backend systems",
                  1000,
                  "I design responsive user interfaces",
                  1000,
                  "I optimize applications for performance",
                  1000,
                  "I am curious in AI and the latest technology trends",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-[#5623c2] font-semibold"
                repeat={Infinity}
              />
            </p>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
