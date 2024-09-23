import React from "react";

export default function index() {
  return (
    <section id="about" className="text-gray-200">
      <div className="container ">
        <h2 className="text-[32px] text-center pb-10 pt-[60px]">About</h2>
        <div className="grid max-[650px]:py-10 grid-cols-2 max-[650px]:grid-cols-1 relative">
          <div className="px-10">
            <p>
              Hello, I’m Sardor Nuriddinov, a junior front-end developer. While
              I don't have professional experience yet, I am passionate about
              web development and continuously enhancing my skills in JavaScript, Typescript, NextJs and React. I enjoy solving problems and building
              user-friendly interfaces. I am eager to apply my knowledge in a
              real-world setting and contribute to meaningful projects.
            </p>
          </div>
          <div className="absolute top-[20px]  max-[650px]:hidden left-[50%] bg-gray-400 w-[2px] h-[100%]">
            <div className="w-4 rounded-full absolute top-[-10px] left-[-7px] h-4 bg-inherit"></div>
            <div className="w-4 rounded-full absolute bottom-[-10px] left-[-7px] h-4 bg-inherit"></div>
          </div>
          <div className="px-10">
            <h2 className="text-[32px] max-[650px]:text-[22px] max-[650px]:pb-3 font-[600] pb-5">
              SOFT SKILLS
            </h2>
            <ul className="grid grid-cols-2 max-[950px]:grid-cols-1 gap-2 w-full justify-center items-center max-[650px]:pb-[40px] pb-[80px]">
              <li className="text-[16px] font-semibold">Teamwork</li>
              <li className="text-[16px] font-semibold">Networking</li>
              <li className="text-[16px] font-semibold">Time management</li>
              <li className="text-[16px] font-semibold">Problem-solving</li>
              <li className="text-[16px] font-semibold">
                Testing and debugging
              </li>
              <li className="text-[16px] font-semibold">Project management</li>
              <li className="text-[16px] font-semibold">Communication</li>
              <li className="text-[16px] font-semibold">Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
