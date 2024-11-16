import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Bghero from "./components/Bghero";
import ReachMe from "./components/ReachMe";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative  ">
        <div className="">
          <Bghero />
          <div className="absolute top-0 left-0 right-0 z-10">
            <Navbar />
            <Hero />
          </div>
        </div>
        <div
          style={{
            backgroundColor: " #000000",
            backgroundImage:
              "linear-gradient(190deg, #9C2FBB 0%, #ff5c00  50%, #001386 100%)",
          }}
          className=""
        >
          <About />
          <Experience />

          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <ReachMe />
            <Tech />
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
