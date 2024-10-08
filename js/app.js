let jogosAlugados = 0;

function contarExibirJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}


function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if(imagem.classList.contains('dashboard__item__img--rented')){
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){ //confirm() = caixa de diálogo com uma mensagem com as opções de OK e Cancelar
            imagem.classList.remove('dashboard__item__img--rented');                         //textContent = retorna um text sem a tag HTML  
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'
        jogosAlugados++;
    }

    contarExibirJogosAlugados();

}

document.addEventListener('DOMContentLoaded', function(){
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarExibirJogosAlugados();
});
