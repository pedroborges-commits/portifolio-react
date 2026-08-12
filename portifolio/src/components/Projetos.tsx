import CardProj from "./CardProjetos";

const projetos = [
  {
    id: 1,
    title: "Boletim Escolar",
    subtitle: "Aplicação para gerenciar notas e médias de alunos.",
    img: "./boletim.jpg",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    id: 2,
    title: "Clima Agora",
    subtitle: "App para consultar a previsão do tempo.",
    img: "./previsao.jpg",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 3,
    title: "Lista de Tarefas",
    subtitle: "Aplicação para adicionar, editar e remover tarefas.",
    img: "./lista_tarefa.png",
    technologies: ["React", "Tailwind", "JavaScript"],
  },
];

function Projetos() {
  return (
    <>
      <section id="projetos">
        <div className="flex flex-col items-center mt-20 md:mt-40 mb-20 md:mb-40">
          <p className=" font-bold text-2xl leading-10 tracking-[-0.9px] text-center align-middle text-[#303D50]">
            Meus projetos
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 px-6 mt-10">
            {projetos.map((projeto) => (
              <CardProj
                key={projeto.id}
                title={projeto.title}
                img={projeto.img}
                subtitle={projeto.subtitle}
                technologies={projeto.technologies}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projetos;
