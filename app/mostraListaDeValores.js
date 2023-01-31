const containerResultadoLista = document.querySelector("[data-resultadoLista]");

function mostraLista(origem, destino, tempo, planoEscolhido, totalComTaxa, totalSemTaxa) {
    const larguraTela = window.innerWidth;

    if (larguraTela >= 992) return listaLg(origem, destino, tempo, planoEscolhido, totalComTaxa, totalSemTaxa);

    return lista(origem, destino, tempo, planoEscolhido, totalComTaxa, totalSemTaxa);
}

function listaLg(origem, destino, tempo, planoEscolhido, totalComTaxa, totalSemTaxa) {
    return containerResultadoLista.innerHTML = `
        <div class="resultado-consulta"> 
            <table class="table table-hover m-0">
                <thead class="cabecalho-tabelaPreco text-center">
                    <tr>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Tempo (em minutos)</th>
                        <th>Plano FaleMais</th>
                        <th>Com FaleMais</th>
                        <th>Sem FaleMais</th>
                    </tr>
                </thead>

                <tbody class="corpo-tabelaPreco text-center">
                    <tr>
                        <td>${origem}</td>
                        <td>${destino}</td>
                        <td>${tempo}</td>
                        <td>FaleMais ${planoEscolhido}</td>
                        <td>R$ ${totalComTaxa}</td>
                        <td>R$ ${totalSemTaxa}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
}

function lista(origem, destino, tempo, planoEscolhido, totalComTaxa, totalSemTaxa) {
    return containerResultadoLista.innerHTML =
        `
            <div class="col-12 resultado-consulta-sm" data-resultadoLista>
                <h3 class="p-2 mb-0 w-100">Origem</h3>
                <p class="py-2 text-center">${origem}</p>
            </div>

            <div class="col-12 resultado-consulta-sm" data-resultadoLista>
                <h3 class="p-2 mb-0 w-100">Destino</h3>
                <p class="py-2 text-center">${destino}</p>
            </div>

            <div class="col-12 resultado-consulta-sm" data-resultadoLista>
                <h3 class="p-2 mb-0 w-100">Tempo (em minutos)</h3>
                <p class="py-2 text-center">${tempo}</p>
            </div>

            <div class="col-12 resultado-consulta-sm" data-resultadoLista>
                <h3 class="p-2 mb-0 w-100">Plano</h3>
                <p class="py-2 text-center">FaleMais ${planoEscolhido}</p>
            </div>

            <div class="col-12 resultado-consulta-sm" data-resultadoLista>
                <h3 class="p-2 mb-0 w-100">Com FaleMais</h3>
                <p class="py-2 text-center">R$ ${totalComTaxa}</p>
            </div>

            <div class="col-12 resultado-consulta-sm" data-resultadoLista>
                <h3 class="p-2 mb-0 w-100">Sem FaleMais</h3>
                <p class="py-2 text-center">R$ ${totalSemTaxa}</p>
            </div>
    `
}

export default mostraLista