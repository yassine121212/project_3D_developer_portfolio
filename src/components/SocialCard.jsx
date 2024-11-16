import React from "react";
import "./cstyle.css";
const SocialCard = ({
  platform,
  username,
  description,
  imageUrl,
  icon: Icon,
  bgColor,
  link,
}) => {
  // Check if the link is valid before opening the new window
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank"); // Open the link in a new tab
    } else {
      console.error("Invalid link"); // Handle invalid link case (optional)
    }
  };

  return (
    <div
      className={`${bgColor}   transform transition-all duration-300 hover:scale-105  rounded-xl overflow-hidden shadow-2xl`}
    >
      <div className="relative h-32 card  ">
        <Icon className="absolute top-4 right-4 w-8 h-8 text-white/80" />
      </div>
      <div className="relative px-6 pb-6  ">
        <img
          src={imageUrl}
          alt={username}
          className="w-24 h-24 rounded-full border-4   border-white shadow-lg -mt-12"
        />
        <h3 className="mt-4 text-xl font-bold text-white">{username}</h3>
        <p className="mt-2 text-white/80">{description}</p>
        <button
          onClick={handleClick} // Use the function that checks the link
          className="mt-4 w-full py-2 px-4  card hover:bg-white/20 rounded-lg text-white font-semibold transition-colors duration-200"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default SocialCard;
