function mostraHistorico({ origem, destino, tempo, planoEscolhido, totalComTaxa, totalSemTaxa }) {

    const larguraTela = window.innerWidth;

    if (larguraTela >= 992) historicoLg(origem, destino, tempo, planoEscolhido, totalComTaxa, totalSemTaxa);
    else historico(origem, destino, tempo, planoEscolhido, totalComTaxa, totalSemTaxa);
}

function historico(origem, destino, tempo, planoEscolhido, totalComTaxa, totalSemTaxa) {

    const conteudoModal = document.querySelector("[data-corpoModal]");

    conteudoModal.innerHTML += `

            <div class="col-12 historico-consulta-sm" data-resultadoLista>
                <h3 class="mb-0 w-100 pt-2">Origem</h3>
                <p class="pb-2 text-center">${origem}</p>

                <h3 class="mb-0 w-100">Destino</h3>
                <p class="pb-2 text-center">${destino}</p>

                <h3 class="mb-0 w-100">Tempo (em minutos)</h3>
                <p class="pb-2 text-center">${tempo}</p>

                <h3 class="mb-0 w-100">Plano</h3>
                <p class="pb-2 text-center">FaleMais ${planoEscolhido}</p>

                <h3 class="mb-0 w-100">Com FaleMais</h3>
                <p class="pb-2 text-center">R$ ${totalComTaxa}</p>

                <h3 class="mb-0 w-100">Sem FaleMais</h3>
                <p class="pb-2 text-center">R$ ${totalSemTaxa}</p>
            </div>
    `
}

function historicoLg(origem, destino, tempo, planoEscolhido, totalComTaxa, totalSemTaxa) {

    const conteudoModal = document.querySelector("[data-corpoModal]");

    conteudoModal.innerHTML += `
    
        <div class="resultado-consulta-modal mt-2"> 
            <table class="table table-hover m-0">
                <thead class="cabecalho-tabelaPreco text-center">
                    <tr>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Tempo <br>(em minutos)</th>
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

export default mostraHistorico;