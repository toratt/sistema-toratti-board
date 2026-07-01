const board = document.getElementById("board");

const btnNovaColuna = document.getElementById("btnNovaColuna");

btnNovaColuna.addEventListener("click", criarColuna);



function criarColuna(){

    const nome = prompt("Nome da coluna");

    if(!nome){

        return;

    }

    const coluna = document.createElement("div");

    coluna.classList.add("column");



    const titulo = document.createElement("h2");

    titulo.classList.add("column-title");

    titulo.textContent = nome;



    const botaoCard = document.createElement("button");

    botaoCard.textContent = "+ Card";

    botaoCard.classList.add("add-card");



    botaoCard.addEventListener("click", ()=>{

        criarCard(coluna);

    });



    coluna.appendChild(titulo);

    coluna.appendChild(botaoCard);



    board.appendChild(coluna);

}



function criarCard(coluna){

    const nome = prompt("Nome do Card");



    if(!nome){

        return;

    }



    const card = document.createElement("div");



    card.classList.add("card");



    card.textContent = nome;



    coluna.appendChild(card);

}