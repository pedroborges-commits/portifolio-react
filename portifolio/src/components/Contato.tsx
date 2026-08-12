import { Send } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erros, setErros] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);
  useEffect(() => {
    if (enviado) {
      const timer = setTimeout(() => {
        setEnviado(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [enviado]);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const novosErros = {
      nome: "",
      email: "",
      mensagem: "",
    };
    if (nome === "") {
      novosErros.nome = "Preencha seu nome!";
    }

    if (email === "") {
      novosErros.email = "Preencha seu email!";
    }

    if (mensagem === "") {
      novosErros.mensagem = "Digite uma mensagem!";
    }

    setErros(novosErros);

    if (novosErros.nome || novosErros.email || novosErros.mensagem) {
      return;
    }

    console.log(nome);
    console.log(email);
    console.log(mensagem);
    setEnviado(true);
    setNome("");
    setEmail("");
    setMensagem("");
  }
  return (
    <>
      <section id="contato" className="py-4 bg-blue-300">
        <div className="flex gap-8 max-w-6xl mx-auto flex-col md:flex-row px-6">
          <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm flex-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8E5FF] flex items-center justify-center shrink-0">
                <Mail className="text-[#1F49D6]" size={24} />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-[#303D50]">
                  Entre em contato
                </h2>

                <p className="text-sm text-[#627084]">
                  Gostou do meu trabalho? Vamos conversar!
                </p>
                <div className="flex items-start gap-2">
                  <Phone className="text-[#1F49D6] mt-1" size={16} />

                  <div>
                    <p className="text-[#303D50] text-sm">(22)99239-8460</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="text-[#1F49D6] mt-1" size={16} />

                  <div>
                    <a
                      href="mailto:pedro.borges@gruporiomais.com.br"
                      className="text-[#303D50] text-sm hover:underline break-all"
                    >
                      pedro.borges@gruporiomais.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="text-[#1F49D6] mt-1 " size={16} />

                  <div>
                    <p className="text-[#303D50] text-sm">Cabo Frio - RJ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 pt-0 md:pt-8">
            <div className="flex flex-col sm:flex-row gap-4 mt-3">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setNome(e.target.value)
                  }
                  className="flex-1 h-10 w-full rounded-lg border border-[#E2E5E9] bg-[#FBFAF9] px-2"
                />
                {erros.nome && (
                  <p className="mt-1 text-xs text-red-500">{erros.nome}</p>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Seu email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className="flex-1 h-10 w-full rounded-lg border border-[#E2E5E9] bg-[#FBFAF9] px-2"
                />
                {erros.email && (
                  <p className="mt-1 text-xs text-red-500">{erros.email}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 items-stretch sm:items-center">
              <div className="flex-1">
                <textarea
                  placeholder="Sua mensagem"
                  value={mensagem}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setMensagem(e.target.value)
                  }
                  className="h-32 w-full rounded-lg border border-[#E2E5E9] bg-[#FBFAF9] px-2 flex-1 resize-none"
                />
                {erros.mensagem && (
                  <p className=" mt-1 text-xs text-red-500">{erros.mensagem}</p>
                )}
              </div>
              <button
                type="submit"
                className="h-8 w-fit self-center sm:self-auto px-4 rounded-lg bg-[#303D50] text-white flex text-sm items-center justify-center gap-3"
              >
                <Send size={14} /> Enviar mensagem
              </button>
            </div>
            {enviado && (
              <p className="mt-3 text-sm text-green-600">
                Mensagem enviada com sucesso! ✅
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
export default Contato;
