import dadosOrigemDestino from './dadosOrigemDestino.json' assert {type: 'json'};

function calculaValores(valorOrigem, valorDestino, planoEscolhido, tempo) {

    const origem = dadosOrigemDestino.find(({ origem }) => origem === valorOrigem);
    const possiveisDestinosApartirDaOrigemn = origem.destinos;
    const destinoValido = possiveisDestinosApartirDaOrigemn.find(({ destino }) => destino === valorDestino);

    const tempoRestante = tempo - planoEscolhido > 0 ? tempo - planoEscolhido : 0;
    const valorComTaxa = tempoRestante * destinoValido.taxa * 1.1;
    const valorSemTaxa = tempo * destinoValido.taxa;

    return [valorComTaxa.toFixed(2), valorSemTaxa.toFixed(2)];
}

export default calculaValores;
