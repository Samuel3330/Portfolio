import Titles from "./Titles";
import "../App.css";
import Items from "./Items";

const Technologies = () => {
  return (
    <>
      <section
        className="bg-cover w-full min-h-[100vh] pb-4 flex flex-col items-center gap-8 max-[500px]:bg-center"
        id="technologies"
      >
        <Titles title="Tegnologias" />
        <div className="w-full flex flex-col gap-8 justify-center items-center">
          <ul className=" w-[80%] flex flex-wrap flex-row justify-center items-center gap-10 xl:gap-64">
            <li className="ball relative text-gray-900 sm:text-lg font-title">
              Básico
            </li>
            <li className="ball2 relative text-gray-900 sm:text-lg font-title">
              Intermedio
            </li>
            <li className="ball3 relative text-gray-900 sm:text-lg font-title">
              Avanzado
            </li>
          </ul>
        </div>
        <div className="w-[60%] h-full relative px-10 flex flex-col justify-start items-start border-l-4 border-slate-500">
          <div className="list flex flex-col gap-4 mb-4">
            <h1 className="text-xl font-medium font-title text-slate-800">
              Tegnologias de Desarrollo
            </h1>
            <ul className="w-full flex flex-wrap gap-x-16 gap-y-2">
              <div className="flex flex-col">
                <Items item={"Html"} nivel={"avanzado"} />
                <Items item={"Css"} nivel={"avanzado"} />
                <Items item={"Javascript"} nivel={"intermedio"} />
                <Items item={"Bootstrap"} nivel={"intermedio"} />
                <Items item={"Git"} nivel={"intermedio"} />
              </div>
              <div className="flex flex-col">
                <Items item={"Tailwind"} nivel={"intermedio"} />
                <Items item={"JQuery"} nivel={"intermedio"} />
                <Items item={"React"} nivel={"intermedio"} />
                <Items item={"Next"} nivel={"intermedio"} />
                <Items item={"Grapql"} nivel={"intermedio"} />
              </div>
              <div className="flex flex-col">
                <Items item={"Python"} nivel={"intermedio"} />
                <Items item={"Django"} nivel={"intermedio"} />
                <Items item={"PostgreSql"} nivel={"basico"} />
              </div>
            </ul>
          </div>
          <div className="list flex flex-col gap-4 mb-4">
            <h1 className="text-xl font-medium font-title text-slate-800">
              Tegnologias de Diseño
            </h1>
            <ul className="w-full flex flex-wrap gap-x-16 gap-y-2">
              <div className="flex flex-col">
                <Items item={"Photoshop"} nivel={"intermedio"} />
                <Items item={"Ilustrator"} nivel={"basico"} />
              </div>
              <div className="flex flex-col">
                <Items item={"Figma"} nivel={"intermedio"} />
                <Items item={"Gimp"} nivel={"avanzado"} />
              </div>
            </ul>
          </div>
          <div className="list flex flex-col gap-4 mb-4">
            <h1 className="text-xl font-medium font-title text-slate-800">
              Tegnologias de Calculo
            </h1>
            <ul className="w-full flex flex-wrap gap-x-16 gap-y-2">
              <div className="flex flex-col">
                <Items item={"Excel"} nivel={"intermedio"} />
              </div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
