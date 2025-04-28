import React from "react";

const Education = () => {
  const educationData = [
    {
      year: "2021",
      title: "High School",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      year: "2022",
      title: "University",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      year: "2023",
      title: "Internship",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Education</h2>

      <div className="relative flex flex-col items-center">
        {/* Vertical Line */}
        <div className="absolute w-1 bg-cyan-400 h-full hidden md:block"></div>

        {educationData.map((item, index) => (
          <div key={index} className="w-full flex flex-col md:flex-row items-center mb-16 relative">
            {/* Dot & Year */}
            <div className="flex flex-col items-center z-10">
              <div className="w-5 h-5 bg-cyan-400 rounded-full mb-2"></div>
              <div className="text-lg font-semibold">{item.year}</div>
            </div>

            {/* Description Box */}
            <div className={`bg-black border-2 border-cyan-400 rounded-full px-8 py-6 shadow-md w-full md:w-1/2
              ${index % 2 === 0 ? "md:ml-10 md:self-start" : "md:ml-10 md:self-end"}`}>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
