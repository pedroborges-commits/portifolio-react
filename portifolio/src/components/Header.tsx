import { CodeXml } from "lucide-react";
import { Download } from "lucide-react";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuAberto(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between w-[75%] mx-auto px-6 h-20">
        <div className="w-6 h-6 rounded-full border flex items-center justify-center bg-blue-300">
          <CodeXml className="text-white " size={16} />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#inicio"
            className="text-[#627084] cursor-pointer border-b-2 border-transparent hover:border-[#1F49D6] hover:text-[#1F49D6]"
          >
            Início
          </a>

          <a
            href="#sobre"
            className="text-[#627084] cursor-pointer border-b-2 border-transparent hover:border-[#1F49D6] hover:text-[#1F49D6]"
          >
            Sobre
          </a>

          <a
            href="#habilidades"
            className="text-[#627084] cursor-pointer border-b-2 border-transparent hover:border-[#1F49D6] hover:text-[#1F49D6]"
          >
            Habilidades
          </a>

          <a
            href="#projetos"
            className="text-[#627084] cursor-pointer border-b-2 border-transparent hover:border-[#1F49D6] hover:text-[#1F49D6]"
          >
            Projetos
          </a>

          <a
            href="#contato"
            className="text-[#627084] cursor-pointer border-b-2 border-transparent hover:border-[#1F49D6] hover:text-[#1F49D6]"
          >
            Contato
          </a>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="h-8 px-8 rounded-lg bg-[#303D50] text-white text-sm flex items-center gap-3 cursor-pointer">
              <Download size={14} /> Baixar CV
            </button>
          </a>
        </nav>

        {/*responsividade */}
        <button
          className="md:hidden"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <Menu size={28} />
        </button>
        {menuAberto && (
          <nav className="absolute top-20 left-0 w-full bg-white flex flex-col items-center gap-5 py-6 shadow-md">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="h-8 px-6 rounded-lg bg-[#303D50] text-white text-sm flex items-center gap-3">
                <Download size={14} />
                Baixar CV
              </button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
