import Titles from "./Titles";
import MediaButtons from "./MediaButtons";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJquery,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoBootstrap,
  BiLogoJavascript,
  BiCodeAlt,
  BiLink,
} from "react-icons/bi";

const Projects = () => {
  return (
    <section className=" sm:min-h-[100vh] sm:pb-10">
      <Titles title={"Projects"}></Titles>
      <div
        className="lg:w-[80%] sm:w-[90%] h-auto w-full flex sm:justify-around sm:m-auto sm:items-center sm:flex-wrap sm:gap-y-5 gap-5 sm:snap-none snap-x snap-mandatory 
      max-[640px]:overflow-x-scroll scroll-smooth focus:scroll-auto bg-slate-100 sm:bg-white py-6 sm:p-0"
      >
        <div className="flex flex-col w-[100%] lg:w-[30%] sm:w-[40%] scroll-ml-2 snap-start">
          <div className="bg-cover shadow-md w-56 sm:w-auto rounded-lg relative overflow-hidden">
            <div>
              <img src="./imgProjects/LandingPage1.png" alt="" />
            </div>
            <div className="flex m-auto py-2 sm:py-4 w-[80%] justify-around">
              {/* <h3 className="font-title  text-gray-900 sm:text-lg text-sm">
                Landing Page
              </h3> */}
              <MediaButtons color={"text-[#DD4B25] text-4xl"}>
                <BiLogoHtml5 />
              </MediaButtons>
              <MediaButtons color={"text-[#254ADD] text-4xl"}>
                <BiLogoCss3 />
              </MediaButtons>
              <MediaButtons color={"text-[#5AB8F0] text-4xl"}>
                <BiLogoTailwindCss />
              </MediaButtons>
              <MediaButtons color={"text-[#E8D44C] text-4xl  "}>
                <BiLogoJavascript />
              </MediaButtons>
              <MediaButtons color={"text-[#68D2F7] text-4xl"}>
                <BiLogoReact />
              </MediaButtons>
            </div>
            <div className="w-full flex">
              <a
                href="https://landingpage1.onrender.com"
                target="_blank"
                className="w-1/2 flex justify-center items-center gap-2 font-title bg-slate-900 text-white py-2 sm:py-4"
              >
                <span className="text-xl">
                  <BiLink />
                </span>
                Demo
              </a>
              <a
                href="https://github.com/Samuel3330/landingPage1"
                target="_blank"
                className="w-1/2 flex justify-center items-center gap-2 font-title py-2 sm:py-4 bg-gray-200"
              >
                <span className="text-xl">
                  <BiCodeAlt />
                </span>
                Codigo
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[30%] sm:w-[40%] scroll-ml-2 snap-start">
          <div className="bg-cover shadow-md w-56 sm:w-auto rounded-lg relative overflow-hidden">
            <div>
              <img src="./imgProjects/LandingPage2.png" alt="" />
            </div>
            <div className="flex m-auto py-2 sm:py-4 w-[80%] justify-around">
              {/* <h3 className="font-title  text-gray-900 sm:text-lg text-sm">
                Landing Page
              </h3> */}
              <MediaButtons color={"text-[#DD4B25] text-4xl"}>
                <BiLogoHtml5 />
              </MediaButtons>
              <MediaButtons color={"text-[#254ADD] text-4xl"}>
                <BiLogoCss3 />
              </MediaButtons>
              <MediaButtons color={"text-[#5AB8F0] text-4xl"}>
                <BiLogoTailwindCss />
              </MediaButtons>
              <MediaButtons color={"text-[#E8D44C] text-4xl  "}>
                <BiLogoJavascript />
              </MediaButtons>
              <MediaButtons color={"text-[#68D2F7] text-4xl"}>
                <BiLogoReact />
              </MediaButtons>
            </div>
            <div className="w-full flex">
              <a
                href="https://landingpage2.onrender.com"
                target="_blank"
                className="w-1/2 flex justify-center items-center gap-2 font-title bg-slate-900 text-white py-2 sm:py-4"
              >
                <span className="text-xl">
                  <BiLink />
                </span>
                Demo
              </a>
              <a
                href="https://github.com/Samuel3330/landingPage2"
                target="_blank"
                className="w-1/2 bg-gray-200 flex justify-center items-center gap-2 font-title py-2 sm:py-4"
              >
                <span className="text-xl">
                  <BiCodeAlt />
                </span>
                Codigo
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[30%] sm:w-[40%] scroll-ml-2 snap-start">
          <div className="bg-cover shadow-md w-56 sm:w-auto rounded-lg relative overflow-hidden">
            <div>
              <img src="./imgProjects/loginTemplate1.png" alt="" />
            </div>
            <div className="flex m-auto py-2 sm:py-4 w-[80%] justify-around">
              {/* <h3 className="font-title  text-gray-900 sm:text-lg text-sm">
                Landing Page
              </h3> */}
              <MediaButtons color={"text-[#DD4B25] text-4xl"}>
                <BiLogoHtml5 />
              </MediaButtons>
              <MediaButtons color={"text-[#254ADD] text-4xl"}>
                <BiLogoCss3 />
              </MediaButtons>
              <MediaButtons color={"text-[#5AB8F0] text-4xl"}>
                <BiLogoTailwindCss />
              </MediaButtons>
              <MediaButtons color={"text-[#E8D44C] text-4xl  "}>
                <BiLogoJavascript />
              </MediaButtons>
              <MediaButtons color={"text-[#68D2F7] text-4xl"}>
                <BiLogoReact />
              </MediaButtons>
            </div>
            <div className="w-full flex">
              <a
                href="https://logintemplate2-cjv4.onrender.com"
                target="_blank"
                className="w-1/2 flex justify-center items-center gap-2 font-title bg-slate-900 text-white py-2 sm:py-4"
              >
                <span className="text-xl">
                  <BiLink />
                </span>
                Demo
              </a>
              <a
                href="https://github.com/Samuel3330/loginTemplate2"
                target="_blank"
                className="w-1/2 flex bg-gray-200 justify-center items-center gap-2 font-title py-2 sm:py-4"
              >
                <span className="text-xl">
                  <BiCodeAlt />
                </span>
                Codigo
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[30%] sm:w-[40%] scroll-ml-2 snap-start">
          <div className="bg-cover shadow-md w-56 sm:w-auto rounded-lg relative overflow-hidden">
            <div>
              <img src="./imgProjects/loginTemplate2.png" alt="" />
            </div>
            <div className="flex m-auto py-2 sm:py-4 w-[80%] justify-around">
              {/* <h3 className="font-title  text-gray-900 sm:text-lg text-sm">
                Landing Page
              </h3> */}
              <MediaButtons color={"text-[#DD4B25] text-4xl"}>
                <BiLogoHtml5 />
              </MediaButtons>
              <MediaButtons color={"text-[#254ADD] text-4xl"}>
                <BiLogoCss3 />
              </MediaButtons>
              <MediaButtons color={"text-[#5AB8F0] text-4xl"}>
                <BiLogoTailwindCss />
              </MediaButtons>
              <MediaButtons color={"text-[#E8D44C] text-4xl"}>
                <BiLogoJavascript />
              </MediaButtons>
              <MediaButtons color={"text-[#68D2F7] text-4xl"}>
                <BiLogoReact />
              </MediaButtons>
            </div>
            <div className="w-full flex">
              <a
                href="https://logintemplate-xw1k.onrender.com"
                target="_blank"
                className="w-1/2 flex justify-center items-center gap-2 font-title bg-slate-900 text-white py-2 sm:py-4"
              >
                <span className="text-xl">
                  <BiLink />
                </span>
                Demo
              </a>
              <a
                href="https://github.com/Samuel3330/loginTemplate"
                target="_blank"
                className="w-1/2 flex bg-gray-200 justify-center items-center gap-2 font-title py-2 sm:py-4"
              >
                <span className="text-xl">
                  <BiCodeAlt />
                </span>
                Codigo
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[30%] sm:w-[40%] scroll-ml-2 snap-start">
          <div className="bg-cover shadow-md w-56 sm:w-auto rounded-lg relative overflow-hidden">
            <div>
              <img src="./imgProjects/tictactoe.png" alt="" />
            </div>
            <div className="flex m-auto py-2 sm:py-4 w-[80%] justify-around">
              {/* <h3 className="font-title  text-gray-900 sm:text-lg text-sm">
                Landing Page
              </h3> */}
              <MediaButtons color={"text-[#DD4B25] text-4xl"}>
                <BiLogoHtml5 />
              </MediaButtons>
              <MediaButtons color={"text-[#254ADD] text-4xl"}>
                <BiLogoCss3 />
              </MediaButtons>
              <MediaButtons color={"text-[#5AB8F0] text-4xl"}>
                <BiLogoTailwindCss />
              </MediaButtons>
              <MediaButtons color={"text-[#E8D44C] text-4xl"}>
                <BiLogoJavascript />
              </MediaButtons>
              <MediaButtons color={"text-[#68D2F7] text-4xl"}>
                <BiLogoReact />
              </MediaButtons>
            </div>
            <div className="w-full flex">
              <a
                href="https://tictactoe-k458.onrender.com"
                target="_blank"
                className="w-1/2 flex justify-center items-center gap-2 font-title bg-slate-900 text-white py-2 sm:py-4"
              >
                <span className="text-xl">
                  <BiLink />
                </span>
                Demo
              </a>
              <a
                href="https://github.com/Samuel3330/juegoTictactoe"
                target="_blank"
                className="w-1/2 bg-gray-200 flex justify-center items-center gap-2 font-title py-2 sm:py-4"
              >
                <span className="text-xl">
                  <BiCodeAlt />
                </span>
                Codigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
