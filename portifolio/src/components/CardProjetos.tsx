type ProjectCardProps = {
  title: string;
  subtitle?: string;
  img: string;
  technologies: string[];
};

function CardProj({ title, subtitle, img, technologies }: ProjectCardProps) {
  return (
    <div className="w-80 rounded-2xl border border-[#E2E5E9] bg-white overflow-hidden">
      <img src={img} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="font-bold text-base text-[#303D50]">{title}</h3>

        <p className="mt-2 text-xs text-[#627084]">{subtitle}</p>

        <div className="flex gap-2 mt-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="px-2 py-1 rounded-full bg-[#E0F2FE] text-[#1F49D6] text-[10px]"
            >
              {technology}
            </span>
          ))}
        </div>

        <a href="#" className="block mt-3 text-xs font-semibold text-[#1F49D6]">
          Ver projeto →
        </a>
      </div>
    </div>
  );
}

export default CardProj;
