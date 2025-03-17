function mudaFoto(foto){
    document.getElementById("icone").src=foto;
} 
function exibirDataAtual() {
    const dataAtual = new Date();
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoes);

    document.getElementById('data').innerText = dataFormatada;
}
window.onload = exibirDataAtual;


