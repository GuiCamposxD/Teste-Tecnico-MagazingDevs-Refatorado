import validaCamposFormulario from "./validaFormulario.js";

function pegaValoresFormulario(formulario) {

    const origem = formulario.origem.value;
    const destino = formulario.destino.value;
    const planoEscolhido = formulario.plano.value.replace(/[a-zA-Z]+/, '');
    const tempo = formulario.tempo.value;

    validaCamposFormulario(origem, destino, tempo);

    return (
        {
            origem,
            destino,
            planoEscolhido,
            tempo
        }
    )
}

export default pegaValoresFormulario;

/* 

Agora estamos passando o formulario como parâmetro da função, a função agora tem parâmetro o que antes não tinha.

Mudança no nome das variáveis, agora as variáveis se chamam origem, destino, planoEscolhido e tempo.

Não pegamos mais os campos por meio do querySelector, pois como estamos passando o formulário como parâmetro, conseguimos pegar os valores direito do parâmetro acessando os campos com os nomes dos inputs, deixando o código mais limpo.

Remoção do selectDestino e valorTempo do export.

*/