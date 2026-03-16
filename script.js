// =====================
// QUIZ INTERATIVO
// =====================

function verificarResposta(opcao){

let resposta = document.getElementById("resposta");

if(opcao === "B"){

resposta.innerHTML = "✅ Você acertou! Esse é só um exemplo do quiz.";

resposta.style.color = "lime";

/* mostra botão de compra */

document.getElementById("compra").style.display = "block";

}

else{

resposta.innerHTML = "❌ Resposta incorreta. Tente novamente.";

resposta.style.color = "red";

}

}



// =====================
// CONTADOR DE ESCASSEZ
// =====================

let tempo = 600; // 10 minutos

function atualizarContador(){

let minutos = Math.floor(tempo/60);

let segundos = tempo % 60;

if(segundos < 10){
segundos = "0"+segundos;
}

document.getElementById("countdown").innerText = minutos + ":" + segundos;

if(tempo > 0){
tempo--;
}

}

setInterval(atualizarContador,1000);




// =====================
// POPUP DE COMPRAS
// =====================

let nomes = [
"Lucas","Maria","João","Ana",
"Pedro","Daniel","Samuel","Beatriz"
];

let cidades = [
"São Paulo","Rio de Janeiro","Recife",
"Salvador","Curitiba","Fortaleza"
];

function mostrarCompra(){

let nome = nomes[Math.floor(Math.random()*nomes.length)];

let cidade = cidades[Math.floor(Math.random()*cidades.length)];

let popup = document.createElement("div");

popup.className = "compra-popup";

popup.innerHTML = `
<strong>${nome}</strong> de ${cidade}
acabou de comprar o PDF
`;

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},4000);

}

setInterval(mostrarCompra,10000);

/* ===========================
QUIZ BÍBLICO
=========================== */

const perguntas=[

{
pergunta:"Quem criou o céu e a terra?",
respostas:["Moisés","Abraão","Deus","Pedro"],
correta:2
},

{
pergunta:"Quantos dias Deus levou para criar o mundo?",
respostas:["5","6","7","10"],
correta:1
},

{
pergunta:"Quem construiu a arca?",
respostas:["Noé","Davi","Paulo","Salomão"],
correta:0
}

];

let indice=0;
let pontuacao=0;

function carregarPergunta(){

const q=perguntas[indice];

document.getElementById("question").innerText=q.pergunta;

const answers=document.getElementById("answers");

answers.innerHTML="";

q.respostas.forEach((resposta,i)=>{

const btn=document.createElement("div");

btn.classList.add("answer");

btn.innerText=resposta;

btn.onclick=()=>responder(i);

answers.appendChild(btn);

});

let progresso=((indice)/perguntas.length)*100;

document.getElementById("progress").style.width=progresso+"%";

}

function responder(i){

if(i===perguntas[indice].correta){

pontuacao++;

}

document.getElementById("score").innerText="Pontuação: "+pontuacao;

indice++;

if(indice<perguntas.length){

carregarPergunta();

}

else{

document.getElementById("quiz-container").style.display="none";

document.getElementById("sales-page").style.display="block";

}

}

carregarPergunta();
