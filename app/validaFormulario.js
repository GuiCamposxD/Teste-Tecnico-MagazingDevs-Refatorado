import dadosOrigemDestino from './dadosOrigemDestino.json' assert {type: 'json'};

const containerErroDestino = document.querySelector("[data-containerErroDestino]");
const containerErroTempo = document.querySelector("[data-containerErroTempo]");

function validaCamposFormulario(valorOrigem, valorDestino, valorTempo) {

    containerErroDestino.classList.add("d-none");
    containerErroDestino.classList.remove("erro");
    containerErroDestino.classList.remove("msg-erro");

    containerErroTempo.classList.add("d-none");
    containerErroTempo.classList.remove("erro");
    containerErroTempo.classList.remove("msg-erro");

    const origem = dadosOrigemDestino.find(({ origem }) => origem === valorOrigem);
    const possiveisDestinosApartirDaOrigemn = origem.destinos;
    const destinoValido = possiveisDestinosApartirDaOrigemn.find(({ destino }) => destino === valorDestino);

    try {

        if (!destinoValido) throw { name: "Destino inválido", message: "Destino inválido, cheque a tabela de valores para saber os possíveis destinos" };

        if (valorTempo.length > 4 || valorTempo < 0) throw { name: "Tempo muito longo", message: "Valor inválido, insira um valor positivo de até 4 digitos" };
    } catch (e) {
        if (e.name === "Destino inválido") {
            containerErroDestino.classList.remove("d-none");
            containerErroDestino.classList.add("erro");
            containerErroDestino.classList.add("msg-erro");
            containerErroDestino.innerHTML = "Destino inválido, cheque a tabela de valores para saber os possíveis destinos";
        } else {
            containerErroTempo.classList.remove("d-none");
            containerErroTempo.classList.add("erro");
            containerErroTempo.classList.add("msg-erro");
            containerErroTempo.innerHTML = "Valor inválido, insira um valor positivo de até 4 digitos";
        }
    }
}
export default validaCamposFormulario;