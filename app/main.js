import pegaValoresFormulario from "./pegaValoresFormulario.js";
import calculaValores from "./calculaTaxas.js";
import mostraLista from "./mostraListaDeValores.js";
import alimentaHistorico from "./alimentaHistorico.js";
import mostraHistorico from "./mostraHistorico.js";

const formulario = document.querySelector("[data-formulario]");
const botaoHistorico = document.querySelector("[data-historico]");
const containerResultadoConsulta = document.querySelector("[data-resultadoLista]");

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const { origem, destino, planoEscolhido, tempo } = pegaValoresFormulario(formulario);

    const [totalComTaxa, totalSemTaxa] = calculaValores(origem, destino, Number(planoEscolhido), Number(tempo));

    alimentaHistorico(origem, destino, tempo, planoEscolhido, totalComTaxa, totalSemTaxa);

    mostraLista(origem, destino, tempo, planoEscolhido, totalComTaxa, totalSemTaxa);

    containerResultadoConsulta.scrollIntoView(false);

    formulario.tempo.value = "";
})

botaoHistorico.addEventListener("click", () => {

    const historicoCompleto = JSON.parse(localStorage.getItem("historico"));

    const localConteudoModal = document.querySelector("[data-corpoModal]");
    localConteudoModal.innerHTML = "";

    historicoCompleto.forEach((itemDoHistorico) => mostraHistorico(itemDoHistorico));
})
