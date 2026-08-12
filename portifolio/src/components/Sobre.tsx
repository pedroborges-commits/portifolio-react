import { GraduationCap } from "lucide-react";

function Sobre() {
  return (
    <>
      <section id="sobre">
        <div className="flex flex-col md:flex-row w-full h-auto mt-20 md:mt-40 mb-20 md:mb-40 px-6 md:px-10  gap-10 justify-center items-center md:gap-30 ">
          <div className="mt-3 mb-4">
            <h3 className="text-2xl font-extrabold  text-[#627084]">
              Sobre mim
            </h3>

            <p className="w-full max-w-140 mt-2  text-sm font-medium text-[#627084]">
              Olá! Meu nome é Pedro Manoel, tenho 24 anos, nasci em Minas Gerais
              e atualmente moro em Cabo Frio - RJ. Estudei durante 7 anos no
              IFRJ - campus Arraial do Cabo, onde concluí o ensino médio técnico
              em Informática e, posteriormente, uma graduação em Redes de
              Computadores. Atualmente, estou trabalhando para a empresa Rio
              Mais na área de Tecnologia. Trabalhei durante 3 anos na mesma
              empresa no setor financeiro, o que me fez aprender inúmeros
              processos e crescer bastante profissionalmente. No setor de
              Tecnologia, estou desempenhando atividades que estão me ajudando
              no meu desenvolvimento profissional na área de programação
            </p>
          </div>
          <div className="mt-3 mb-4 py-13 ">
            <div className="w-full max-w-60 rounded-xl bg-[#9dd4fc]  flex items-center gap-3 ">
              <div>
                <GraduationCap size={50} className="text-[#ffffff]" />
              </div>

              <div>
                <p className="text-base mt-2 font-bold text-[#ffffff]">
                  Em constante aprendizado
                </p>
                <p className="text-sm mb-4 font-medium text-[#ffffff]">
                  Sempre buscando novos conhecimentos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sobre;
