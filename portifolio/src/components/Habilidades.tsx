import Card from "./Card";

const Habilidade = [
  {
    id: 1,
    title: "Github",
    img: "./git.png",
  },
  {
    id: 2,
    title: "HTML",
    img: "./html.png",
  },
  {
    id: 3,
    title: "CSS",
    img: "./css.png",
  },
  {
    id: 4,
    title: "Javascript",
    img: "./javascript.png",
  },
  {
    id: 5,
    title: "React",
    img: "./react.png",
  },
  {
    id: 6,
    title: "Git",
    img: "./git2.png",
  },
];

function Habilidades() {
  return (
    <>
      <section id="habilidades">
        <div className="flex flex-col items-center mt-40 mb-40">
          <p className="font-bold text-2xl leading-10 tracking-[-0.9px] text-center align-middle text-[#303D50]">
            Minhas Habilidades
          </p>
          <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10 px-6">
            {Habilidade.map((habilidade) => (
              <Card
                key={habilidade.id}
                title={habilidade.title}
                img={habilidade.img}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Habilidades;
