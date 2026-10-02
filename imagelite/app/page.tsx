import Link from "next/link";
import { Template } from "./components";
import { PrimeiroComponente } from "./components/PrimeiroComponente";

export default function Home() {
  return (
    <Template>
       <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-800 to-black text-white flex items-center justify-center">
      <main className="flex flex-col items-center gap-6 text-center px-6">
        <h1 className="text-6xl font-extrabold tracking-tight text-[#C673DF] drop-shadow-[0_0_12px_rgba(148, 196, 154, 0.93)]">
          Welcome
        </h1>

        <PrimeiroComponente mensagem="" mensagemBotao="Clicou!" />

        <Link
          href="/galeria"
          className="mt-4 px-6 py-3 rounded-lg font-bold uppercase tracking-wide
                     bg-purple-700 border border-[#1495FF] text-white
                     shadow-[0_0_10px_rgba(199, 14, 245, 0.64)]
                     hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(255, 20, 196, 0.9)]
                     transition-all duration-300"
        >
          Ir para Galeria
        </Link>
      </main>
    </div>
    </Template>
  );
}