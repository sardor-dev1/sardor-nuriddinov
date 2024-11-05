import React from "react";

export default function index() {
  return (
    <section id="about" className="text-gray-200">
      <h2 className="text-[32px] text-center pb-10 pt-[60px]">About</h2>
      <div className="container ">
        <div className="grid max-[650px]:gap-8 max-[650px]:py-10 grid-cols-2 max-[650px]:grid-cols-1 relative">
          <div className="px-10 max-[650px]:px-0">
            <h2 className="text-[18px] max-[650px]:text-[16px] max-[650px]:pb-3 font-[600] pb-5">
              ABOUT ME
            </h2>
            <p className="max-[500px]:text-[14px]">
              Hello, I’m Sardor Nuriddinov, a junior front-end developer. While
              I don't have professional experience yet, I am passionate about
              web development and continuously enhancing my skills in
              JavaScript, Typescript, NextJs and React. I enjoy solving problems
              and building user-friendly interfaces. I am eager to apply my
              knowledge in a real-world setting and contribute to meaningful
              projects.
            </p>
          </div>
          <div className="absolute top-[20px]  max-[650px]:hidden left-[50%] bg-gray-400 w-[2px] h-[100%]">
            <div className="w-4 rounded-full absolute top-[-10px] left-[-7px] h-4 bg-inherit"></div>
            <div className="w-4 rounded-full absolute bottom-[-10px] left-[-7px] h-4 bg-inherit"></div>
          </div>
          <div className="pl-10 max-[650px]:pl-0">
            <h2 className="text-[18px] max-[650px]:text-[16px] max-[650px]:pb-3 font-[600] pb-5">
              EXPERIENCE
            </h2>
            <ul className=" grid grid-cols-1 gap-2 w-full justify-center items-center max-[650px]:pb-[40px] pb-[80px]">
              <li className="max-[500px]:text-[14px] text-start text-[16px] font-semibold">
                - Collaborate with senior developers to build and maintain web
                applications using React.js
              </li>
              
              <li className="max-[500px]:text-[14px] text-start text-[16px] font-semibold">
                - Develop reusable components and front-end libraries for future
                use
              </li>
              <li className=" max-[500px]:text-[14px] text-start text-[16px] font-semibold">
                - Optimize components for maximum performance across a vast
                array of webcapable devices and browsers
              </li>
              <li className="max-[500px]:text-[14px] text-start text-[16px] font-semibold">
                Problem-solving
              </li>
              <li className="max-[500px]:text-[14px] text-start text-[16px] font-semibold">
                Testing and debugging
              </li>
              <li className="max-[500px]:text-[14px] text-start text-[16px] font-semibold">
                - Participate in code reviews and team meetings to ensure code
                quality and shared knowledge
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
