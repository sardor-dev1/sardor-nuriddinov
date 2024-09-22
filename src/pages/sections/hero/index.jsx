import React from "react";
import People from "../../../assets/my-image.jpg";
import "./style.css";

export default function index() {
  return (
    <section
      id="home"
      className="max-[800px]:pt-[30px] pt-[80px] hero max-[800px]:h-full h-[100vh] text-white"
    >
      <div className="container  max-[800px]:flex-col-reverse flex items-center max-[800px]:gap-[20px] gap-[50px] justify-between">
        <div>
          <p className="text-[16px] font-normal max-[800px]:pt-[40px] pt-[100px]">
            welcome to my universe
          </p>
          <h1 className="font-[Atyp-regular] text-[46px] max-[450px]:text-[28px] max-[620px]:text-[32px] pt-[20px] font-semibold">
            Hi, I'm <span className="text-primary">Sardor Nuriddinov</span>
          </h1>
          <p className="text-[18px]">
            i am a{" "}
            <span className="text-primary font-extralight text-[24px]">
              frontend
            </span>{" "}
            developer
          </p>
          <p className="w-full max-[450px]:text-[14px] max-[800px]:pb-10 max-[450px]:pt-7 max-w-[600px] pt-10">
            A reliable programmer who gets along well with people, likes
            teamwork, has no work experience, and is interested in learning new
            technologies and applying them at work, creative programmer
          </p>
        </div>
        <div className="pt-10 z-20 max-[800px]:pt-20">
          <div className="w-[400px] relative max-[800px]:w-[300px] max-[450px]:w-[250px] max-[450px]:h-[300px] h-[500px] max-[800px]:h-[350px]">
            <img
              className="w-full relative z-20 h-full rounded-[30px]  object-cover"
              src={People}
              alt="Sardor img"
            />
            <div className="absolute top-6 right-5 rounded-[30px] z-10 w-[400px] max-[800px]:w-[300px] max-[450px]:w-[250px] max-[450px]:h-[300px] h-[500px] max-[800px]:h-[350px] bg-transparent border-[10px] border-primary "></div>
          </div>
        </div>
      </div>
    </section>
  );
}
