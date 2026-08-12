import { Mail } from "lucide-react";
import { CalendarCheck } from "lucide-react";

function Inicio() {
  return (
    <>
      <section id="inicio">
        <div className="flex justify-center mt-10 md:mt-20 md:mb-20 mb-10 px-4">
          <div className="max-w-183 w-full rounded-3xl bg-linear-to-r from-[#627084] to-[#9dd4fc] md:p-8 p-6 flex flex-col md:flex-row items-center gap-8 ">
            <div>
              <div className="w-full text-center md:text-left">
                <div className=" w-fit mx-auto md:mx-0 px-3 py-1 rounded-full border border-white text-white font-semibold text-sm flex bg-blue-300">
                  Olá, eu sou
                </div>
                <h3 className="text-3xl font-extrabold  text-white">
                  Pedro Manoel
                </h3>

                <p className="mt-2  text-lg font-medium text-[#E0F2FE]">
                  Desenvolvedor em formação
                </p>

                <p className="mt-2  text-sm font-medium text-[#E0F2FE]">
                  Apaixonado por tecnologia, desenvolvimento web e <br></br>por
                  criar soluções que tornam a vida das pessoas mais simples.
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mt-4">
                  <a href="#projetos">
                    <button className="h-8 px-4 rounded-lg bg-[#303D50] text-white flex text-sm items-center gap-3 hover:bg-[#636669] cursor-pointer">
                      <CalendarCheck size={14} /> Ver Projetos
                    </button>
                  </a>
                  <a href="#contato">
                    <button className="h-8 px-4 rounded-lg bg-blue-300 text-white flex text-sm items-center gap-3 hover:bg-[#1F49D6] cursor-pointer">
                      <Mail size={14} /> Contato
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:pl-15">
              <img
                src="pedro.jpg"
                className="rounded-full w-40 md:w-50  "
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;
