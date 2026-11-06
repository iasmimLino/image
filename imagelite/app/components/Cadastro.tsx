
"use client";

import { useState } from "react";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");

  function cadastrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (senha !== repetirSenha) {
      alert("As senhas não são iguais!");
      return;
    }

    if (senha.length < 6) {
      alert("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    alert("Cadastro realizado com sucesso!");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-10">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-600">
            ImageLite
          </h1>

          <p className="mt-3 text-2xl font-semibold text-gray-800">
            Crie sua conta
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Preencha seus dados para começar!
          </p>
        </div>

        <form onSubmit={cadastrar} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Nome completo
            </label>

            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              E-mail
            </label>

            <input
              type="email"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Senha
            </label>

            <input
              type="password"
              placeholder="Crie uma senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Repetir senha
            </label>

            <input
              type="password"
              placeholder="Digite a senha novamente"
              value={repetirSenha}
              onChange={(e) => setRepetirSenha(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Criar minha conta
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Já possui uma conta?{" "}
          <a href="/login" className="font-semibold text-blue-600 hover:underline">
            Fazer login
          </a>
        </p>

      </div>
    </main>
  );
}