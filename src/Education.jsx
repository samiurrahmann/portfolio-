import React from "react";

const Education = () => {
  return (
    <section className="bg-black text-white py-16 px-5 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Education</h2>

      <div className="relative flex flex-col md:flex-row justify-center items-center gap-12">
        
        {/* High School */}
        <div className="group bg-black border-2 border-cyan-400 rounded-3xl p-8 w-full md:w-1/3 shadow-md hover:shadow-cyan-400 transition-all duration-500 hover:scale-110">
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 bg-cyan-400 rounded-full mb-4"></div>
            <h3 className="text-2xl font-bold mb-2">High School</h3>
            <span className="text-cyan-400 font-semibold mb-4">2020</span>
            <p className="text-gray-400 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* University */}
        <div className="group bg-black border-2 border-cyan-400 rounded-3xl p-8 w-full md:w-1/3 shadow-md hover:shadow-cyan-400 transition-all duration-500 hover:scale-110">
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 bg-cyan-400 rounded-full mb-4"></div>
            <h3 className="text-2xl font-bold mb-2">University</h3>
            <span className="text-cyan-400 font-semibold mb-4">2022</span>
            <p className="text-gray-400 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Internship */}
        <div className="group bg-black border-2 border-cyan-400 rounded-3xl p-8 w-full md:w-1/3 shadow-md hover:shadow-cyan-400 transition-all duration-500 hover:scale-110">
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 bg-cyan-400 rounded-full mb-4"></div>
            <h3 className="text-2xl font-bold mb-2">Internship</h3>
            <span className="text-cyan-400 font-semibold mb-4">2023</span>
            <p className="text-gray-400 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
