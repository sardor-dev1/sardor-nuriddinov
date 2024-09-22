import React from "react";
import Crypto from "../../../assets/portfolio/crypto.png";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <section id="works" className=" py-[80px]">
      <div id="projects" className="container">
        <h2 className="text-[32px] text-[#cbcdf9] text-center pb-[40px]">
          Projects
        </h2>
        {/* Project-1 */}
        <div className="flex flex-col gap-[80px]">
          <div className="flex max-[720px]:flex-col gap-8 items-center justify-between">
            <div>
              <h3 className="text-[#cbcdf9] text-[28px] max-[500px]:text-[22px]">
                Project 1
              </h3>
              <h4 className="text-white text-[24px] max-[500px]:text-[20px]">
                Crypto value
              </h4>
              <p className="w-full max-w-[600px] max-[1200px]:max-w-[400px] max-[850px]:max-w-[300px] max-[720px]:max-w-full max-[850px]:text-[14px] max-[850px]:font-[400] text-[16px] font-semibold text-gray-400">
                1 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Culpa, doloremque sed quos rerum possimus cum quidem ea
                recusandae autem nam et sunt nostrum sint earum ex consequatur?
                Nostrum, odit earum.
              </p>
            </div>
            <div className="relative cursor-all-scroll hover:opacity-75  z-20 w-[500px] max-[1100px]:w-[400px] max-[930px]:w-[320px] max-[720px]:w-[80%] max-[420px]:w-full h-[350px] max-[1100px]:h-[300px] max-[930px]:h-[250px] max-[720px]:h-auto">
              <Link
                className="z-20"
                target="_blank"
                to="https://crypto-project-drab.vercel.app/"
              >
                <img
                  className="rounded-[20px] max-[720px]:rounded-[10px] z-20 w-full h-full object-cover"
                  src={Crypto}
                  alt="Crypto"
                />
              </Link>
              <div className="absolute top-6 z-10 right-5 rounded-[30px] w-[500px] max-[1100px]:w-[400px] max-[720px]:hidden max-[930px]:w-[320px] h-[350px] max-[1100px]:h-[300px] max-[930px]:h-[250px] border-[10px] border-primary "></div>
            </div>
          </div>
          {/* Project-2 */}
          <div className="flex flex-row-reverse max-[720px]:flex-col gap-8 items-center justify-between">
            <div>
              <h3 className="text-[#cbcdf9] text-[28px] max-[500px]:text-[22px]">
                Project 1
              </h3>
              <h4 className="text-white text-[24px] max-[500px]:text-[20px]">
                Crypto value
              </h4>
              <p className="w-full max-w-[600px] max-[1200px]:max-w-[400px] max-[850px]:max-w-[300px] max-[720px]:max-w-full max-[850px]:text-[14px] max-[850px]:font-[400] text-[16px] font-semibold text-gray-400">
                1 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Culpa, doloremque sed quos rerum possimus cum quidem ea
                recusandae autem nam et sunt nostrum sint earum ex consequatur?
                Nostrum, odit earum.
              </p>
            </div>
            <div className="relative cursor-all-scroll hover:opacity-75  z-20 w-[500px] max-[1100px]:w-[400px] max-[930px]:w-[320px] max-[720px]:w-[80%] max-[420px]:w-full h-[350px] max-[1100px]:h-[300px] max-[930px]:h-[250px] max-[720px]:h-auto">
              <Link
                className="z-20"
                target="_blank"
                to="https://crypto-project-drab.vercel.app/"
              >
                <img
                  className="rounded-[20px] max-[720px]:rounded-[10px] z-20 w-full h-full object-cover"
                  src={Crypto}
                  alt="Crypto"
                />
              </Link>
              <div className="absolute top-6 z-10 right-5 rounded-[30px] w-[500px] max-[1100px]:w-[400px] max-[720px]:hidden max-[930px]:w-[320px] h-[350px] max-[1100px]:h-[300px] max-[930px]:h-[250px] border-[10px] border-primary "></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
