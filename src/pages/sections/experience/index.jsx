import {
  Ant,
  Html,
  React,
  Flowbite,
  Css,
  Mui,
  Js,
  NextJs,
  Sass,
  Redux,
  Ts,
  Tailwind,
  Bootstrap
} from "@experience";

export default function index() {
  return (
    <section id="experience" className=" text-blue-50 py-[80px] max-[500px]:py-[40px]">
      <div className="container">
        <h2 className="text-[32px] text-center  pb-[40px]">Technology</h2>
        <div className="flex flex-wrap justify-center gap-x-[80px] max-[600px]:gap-[60px] max-[500px]:gap-[40px] gap-y-[60px]">
          <div className="flex flex-col gap-3 items-center justify-end">
            <img className="w-[80px] max-[600px]:w-[60px] max-[500px]:w-[40px] object-contain" src={Html} alt="html" />
            <h4>Html 5</h4>
          </div>
          <div className="flex flex-col gap-3 items-center justify-end">
            <img className="w-[80px] max-[600px]:w-[60px] max-[500px]:w-[40px] object-contain" src={Css} alt="css" />
            <h4>CSS</h4>
          </div>
          <div className="flex flex-col gap-3 items-center justify-end">
            <img className="w-[80px] max-[600px]:w-[60px] max-[500px]:w-[40px] object-contain" src={Sass} alt="sass" />
            <h4>Sass</h4>
          </div>
          <div className="flex flex-col gap-3 items-center justify-end">
            <img
              className="w-[80px] max-[600px]:w-[60px] max-[500px]:w-[40px] object-contain"
              src={Bootstrap}
              alt="bootstrap"
            />
            <h4>Bootstrap</h4>
          </div>
          <div className="flex flex-col gap-3 items-center justify-end">
            <img
              className="w-[80px] max-[600px]:w-[60px] max-[500px]:w-[40px] object-contain"
              src={Tailwind}
              alt="tailwind"
            />
            <h4>Tailwind CSS</h4>
          </div>
          <div className="flex flex-col gap-3 items-center justify-end">
            <img className="w-[80px] max-[600px]:w-[60px] max-[500px]:w-[40px] object-contain" src={Js} alt="js" />
            <h4>JavaScript</h4>
          </div>
          <div className="flex flex-col gap-3 items-center justify-end">
            <img
              className="w-[80px] max-[600px]:w-[60px] max-[500px]:w-[40px] object-contain"
              src={Ts}
              alt="typescript"
            />
            <h4>TypeScript</h4>
          </div>
          <div className="flex flex-col gap-3 items-center justify-end">
            <img className="w-[80px] max-[600px]:w-[60px] max-[500px]:w-[40px] object-contain" src={React} alt="react" />
            <h4>React JS</h4>
          </div>
          <div className="flex flex-col gap-3 items-center justify-end">
            <img className="w-[80px] max-[600px]:w-[60px] max-[500px]:w-[40px] object-contain" src={Redux} alt="redux" />
            <h4>Redux</h4>
          </div>
          <div className="flex flex-col gap-3 items-center justify-end">
            <img
              className="w-[80px] max-[600px]:w-[60px] max-[500px]:w-[40px] object-contain"
              src={NextJs}
              alt="nextjs"
            />
            <h4>Next.js</h4>
          </div>
          <div className="flex flex-col gap-3 items-center justify-end">
            <img
              className="w-[80px] max-[600px]:w-[60px] max-[500px]:w-[40px] object-contain"
              src={Ant}
              alt="ant design"
            />
            <h4>Ant Design</h4>
          </div>

          <div className="flex flex-col gap-3 items-center justify-end">
            <img
              className="w-[80px] max-[600px]:w-[60px] max-[500px]:w-[40px] object-contain"
              src={Flowbite}
              alt="flowbite"
            />
            <h4>Flowbite</h4>
          </div>

          <div className="flex flex-col gap-3 items-center justify-end">
            <img className="w-[80px] max-[600px]:w-[60px] max-[500px]:w-[40px] object-contain" src={Mui} alt="mui" />
            <h4>Material-UI</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
