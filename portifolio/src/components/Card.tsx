type CardProps = {
  title: string;
  img: string;
  subtitle?: string;
};

function Card({ title, img, subtitle }: CardProps) {
  return (
    <div className="border w-52 h-32 p-6 rounded-2xl border-[#E2E5E9] flex flex-col bg-[#FFFFFF] gap-4 hover:border-[#1F49D6] hover:text-[#1F49D6]">
      <div className=" flex  justify-center items-center flex-1 cursor-pointer">
        <img src={img} className="w-12 mx-auto " alt=""></img>
      </div>
      <p className=" font-bold text-base leading-6 text-center align-middle">
        {title}
      </p>
      <p className="text-[#627084] font-medium text-xs leading-[100%] text-center align-middle w-[180.41px] h-1">
        {subtitle}
      </p>
    </div>
  );
}
export default Card;
