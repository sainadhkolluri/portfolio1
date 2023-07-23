import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Proficient in building high-quality, interactive web applications
          using React.js, with a strong focus on performance optimization and
          clean code practices. Additionally skilled in the fundamentals of
          photography, including composition, lighting, and basic photo editing,
          with a passion for capturing moments and creating visually appealing
          images.
        </p>
      </div>
    </div>
  );
};

export default About;
