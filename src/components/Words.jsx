import React, { useEffect, useState } from "react";

const words = [
  "Frontend",
  "Backend",
  "Fullstack",
  "DevOps",
  "Cloud",
  "React",
  "Node.js",
  "TypeScript",
  "Docker",
  "API",
  "Database",
  "Security",
  "Testing",
  "CI/CD",
  "Agile",
  "Microservices",
  "Serverless",
  "GraphQL",
  "REST",
  "WebSocket",
];

const getRandomSize = () => Math.floor(Math.random() * (48 - 24)); // Random size between 24px and 48px
const getRandomDelay = () => Math.random() * 2;
const getRandomWeight = () => {
  const weights = [300, 400, 500, 600, 700, 800];
  return weights[Math.floor(Math.random() * weights.length)];
};

const Word = ({ text, size, delay, weight }) => {
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Example: Define mobile size as <= 768px width
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on component mount

    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 2000 + delay * 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [delay]);

  // Set fontSize based on the screen size
  const adjustedSize = isMobile ? size : size + 24; // Adjust font size for mobile devices

  return (
    <span
      className={`
        inline-block
        transition-all
        duration-1000
        text-gray-300
        px-2
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
      style={{
        fontWeight: weight,
        transitionDelay: `${delay}s`,
        fontSize: `${adjustedSize}px`, // Use the adjusted font size
      }}
    >
      {text}
    </span>
  );
};

export const WordCloud = () => {
  const [wordProps] = useState(() =>
    words.map((word) => ({
      text: word,
      size: getRandomSize(),
      delay: getRandomDelay(),
      weight: getRandomWeight(),
    }))
  );

  return (
    <div className="p-8 w-full lg:ml-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center leading-relaxed">
        {wordProps.map((props, index) => (
          <Word key={index} {...props} />
        ))}
      </div>
    </div>
  );
};
