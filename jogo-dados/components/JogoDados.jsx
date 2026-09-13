"use client";

import { useState } from "react";
import Dado from "./Dado";

const TOTAL_RODADAS = 5;

function rolarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

const DADOS_VAZIOS = [0, 0];

export default function JogoDados() {
  const [rodadaAtual, setRodadaAtual] = useState(1);
  const [turno, setTurno] = useState("jogador1");
  const [dadosJogador1, setDadosJogador1] = useState(DADOS_VAZIOS);
  const [dadosJogador2, setDadosJogador2] = useState(DADOS_VAZIOS);
  const [mensagem, setMensagem] = useState(
    "Jogador 1, clique em Jogar para começar!"
  );
  const [placar, setPlacar] = useState({ jogador1: 0, jogador2: 0 });
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  function jogarJogador1() {
    setDadosJogador1([rolarDado(), rolarDado()]);
    setTurno("jogador2");
    setMensagem("Jogador 2, sua vez de jogar!");
  }

  function jogarJogador2() {
    const novosDadosJogador2 = [rolarDado(), rolarDado()];
    setDadosJogador2(novosDadosJogador2);

    const somaJogador1 = dadosJogador1[0] + dadosJogador1[1];
    const somaJogador2 = novosDadosJogador2[0] + novosDadosJogador2[1];

    let resultadoRodada;
    let novoPlacar = placar;

    if (somaJogador1 > somaJogador2) {
      resultadoRodada = "Jogador 1 venceu a rodada!";
      novoPlacar = { ...placar, jogador1: placar.jogador1 + 1 };
    } else if (somaJogador2 > somaJogador1) {
      resultadoRodada = "Jogador 2 venceu a rodada!";
      novoPlacar = { ...placar, jogador2: placar.jogador2 + 1 };
    } else {
      resultadoRodada = "Empate na rodada!";
    }

    setPlacar(novoPlacar);

    if (rodadaAtual === TOTAL_RODADAS) {
      let resultadoFinal;
      if (novoPlacar.jogador1 > novoPlacar.jogador2) {
        resultadoFinal = "Jogador 1 venceu o jogo!";
      } else if (novoPlacar.jogador2 > novoPlacar.jogador1) {
        resultadoFinal = "Jogador 2 venceu o jogo!";
      } else {
        resultadoFinal = "Empate geral!";
      }
      setMensagem(`${resultadoRodada} ${resultadoFinal}`);
      setJogoFinalizado(true);
    } else {
      setMensagem(resultadoRodada);
      setRodadaAtual(rodadaAtual + 1);
      setTurno("jogador1");
    }
  }

  function jogarNovamente() {
    setRodadaAtual(1);
    setTurno("jogador1");
    setDadosJogador1(DADOS_VAZIOS);
    setDadosJogador2(DADOS_VAZIOS);
    setPlacar({ jogador1: 0, jogador2: 0 });
    setJogoFinalizado(false);
    setMensagem("Jogador 1, clique em Jogar para começar!");
  }

  return (
    <div className="tabuleiro">
      <h1 className="titulo">Jogo de Dados</h1>
      <p className="rodada">
        Rodada <strong>{rodadaAtual}</strong> / {TOTAL_RODADAS}
      </p>

      <div className="colunas">
        <div className="coluna">
          <span className="nomeJogador">Jogador 1</span>
          <div className="dados">
            <Dado valor={dadosJogador1[0]} />
            <Dado valor={dadosJogador1[1]} />
          </div>
          <button
            className="botaoJogar"
            onClick={jogarJogador1}
            disabled={turno !== "jogador1" || jogoFinalizado}
          >
            Jogar
          </button>
        </div>

        <div className="coluna">
          <span className="nomeJogador">Jogador 2</span>
          <div className="dados">
            <Dado valor={dadosJogador2[0]} />
            <Dado valor={dadosJogador2[1]} />
          </div>
          <button
            className="botaoJogar"
            onClick={jogarJogador2}
            disabled={turno !== "jogador2" || jogoFinalizado}
          >
            Jogar
          </button>
        </div>
      </div>

      <div className={`mensagem ${jogoFinalizado ? "mensagemFinal" : ""}`}>
        {mensagem}
      </div>

      {jogoFinalizado && (
        <button className="botaoReiniciar" onClick={jogarNovamente}>
          Jogar novamente
        </button>
      )}
    </div>
  );
}