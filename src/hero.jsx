import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10">
      
      {/* Left Content */}
      <div className="text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hi, It's <span className="text-cyan-400">Samiur Rahman</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-white">
          I'm a <span className="text-cyan-400">Frontend Developer</span>
        </h2>
        <p className="text-gray-400 max-w-md">
        Crafting responsive, elegant, and high-performance websites. Passionate about clean code, modern design, and creating great user experiences.</p>
        
        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-4">
          <a href="#" className="btn btn-circle bg-cyan-400 text-black hover:bg-cyan-500">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="btn btn-circle bg-cyan-400 text-black hover:bg-cyan-500">
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a href="#" className="btn btn-circle bg-cyan-400 text-black hover:bg-cyan-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="btn btn-circle bg-cyan-400 text-black hover:bg-cyan-500">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center md:justify-start gap-6 pt-6">
          <button className="btn bg-cyan-400 text-black hover:bg-cyan-500">Hire</button>
          <button className="btn btn-outline border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
            Contact
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mb-10 md:mb-0 relative flex items-center justify-center">
  {/* Glowing animated background */}
  <div className="absolute w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-full bg-cyan-400 opacity-20 blur-2xl animate-pulse"></div>

  {/* Image inside */}
  <div className="relative rounded-full overflow-hidden border-4 border-cyan-400 p-2 w-64 h-64 md:w-96 md:h-96">
    <img 
      src="../src/assets/samiurrahmanpicture.jpg" 
      alt="Samiurrahman" 
      className="object-cover w-full h-full rounded-full"
    />
  </div>
</div>




    </div>
  );
};

export default Hero;
