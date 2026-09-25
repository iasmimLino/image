import Link from "next/link";
import { PrimeiroComponente } from "./components/PrimeiroComponente";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black text-white flex items-center justify-center">
      <main className="flex flex-col items-center gap-6 text-center px-6">
        <h1 className="text-6xl font-extrabold tracking-tight text-[#5473D6] drop-shadow-[0_0_12px_rgba(138, 228, 150, 0.93)]">
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
  );
}