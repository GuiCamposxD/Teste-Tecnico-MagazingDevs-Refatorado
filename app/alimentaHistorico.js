const itens = JSON.parse(localStorage.getItem("historico")) || [];

function alimentaHistorico(origem, destino, tempo, planoEscolhido, totalComTaxa, totalSemTaxa) {

    const existe = itens.find((elemento) => elemento.origem === origem && elemento.destino === destino && elemento.tempo === tempo && elemento.planoEscolhido === planoEscolhido && elemento.totalComTaxa === totalComTaxa && elemento.totalSemTaxa === totalSemTaxa);

    console.log(itens);
    console.log(existe)

    if (!existe) {

        const itemAtual =
        {
            origem,
            destino,
            planoEscolhido,
            tempo,
            totalComTaxa,
            totalSemTaxa,
        }

        itens.push(itemAtual);
        localStorage.setItem("historico", JSON.stringify(itens));
    }
}

export default alimentaHistorico;