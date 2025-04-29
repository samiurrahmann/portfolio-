import React from "react";
import Marquee from "react-fast-marquee";

const techLogos = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vite", src: "https://vitejs.dev/logo.svg" },
  { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const TechStack = () => {
  return (
    <div className="relative overflow-hidden py-16 bg-black z-10">
      {/* Animated Background Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#0ff3,transparent_1px)] [background-size:20px_20px] opacity-10 animate-[bgmove_20s_linear_infinite]"></div>

      {/* Scrolling Tech Icons */}
      <div className="relative z-10">
        <h2 className="text-center text-cyan-400 text-2xl font-bold mb-8 tracking-wider">My Tech Stack</h2>
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover
          className="flex gap-10"
        >
          {techLogos.map((logo) => (
            <div
              key={logo.name}
              className="mx-4 w-16 h-16 sm:w-20 sm:h-20 p-3 bg-gray-900 rounded-full shadow-md border border-cyan-400 flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </Marquee>

        {/* Glowing Divider Line */}
        <div className="mt-12 h-1 bg-cyan-400 rounded-full shadow-md shadow-cyan-500/50 w-4/5 mx-auto animate-pulse"></div>
      </div>
    </div>
  );
};

export default TechStack;
