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
import { useEffect, useState } from "react";

const Loader = () => (
  <div className="loader-container">
    <div className="spinner"></div>
    <style>{`
      .loader-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      .spinner {
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top: 4px solid white;
        width: 40px;
        height: 40px;
        animation: spin 0.8s linear infinite;
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate component loading time
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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

          {/* <Feedbacks />  */}
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
