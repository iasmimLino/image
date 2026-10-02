'use client';

interface PrimeiroComponenteProps {
  mensagem: string;
  mensagemBotao: string;
}

export const PrimeiroComponente = ({ mensagem, mensagemBotao }: PrimeiroComponenteProps) => {
  const clique = () => {
    console.log('Você clicou no botão!');
    alert(mensagemBotao);
  };

  return (
    <div className="bg-purple-800/60 border border-purple-400 rounded-xl p-6 shadow-[0_0_15px_rgba(147,51,234,0.5)]">
      <h2 className="text-lg font-semibold text-purple-200 mb-1">Primeiro Componente</h2>
      <p className="text-gray-300 mb-4">{mensagem}</p>
      <button
        onClick={clique}
        className="px-4 py-2 rounded-md font-semibold bg-[#98A0ECC2] text-black
                   shadow-[0_0_8px_rgba(20, 255, 255, 0.8)]
                   hover:shadow-[0_0_16px_#FBFF14] hover:scale-105
                   transition-all duration-200"
      >
        Clique aqui!
      </button>
    </div>
  );
};