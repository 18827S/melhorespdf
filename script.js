// PERGUNTAS DO QUIZ

const perguntas = [

{
pergunta:"Quem criou o céu e a terra?",
respostas:["Abraão","Moisés","Deus","Pedro"],
correta:2
},

{
pergunta:"Quem construiu a arca para sobreviver ao dilúvio?",
respostas:["Noé","Davi","Paulo","Salomão"],
correta:0
},

{
pergunta:"Quantos dias Deus levou para criar o mundo?",
respostas:["5","6","7","10"],
correta:1
}

];

let indicePergunta = 0;
let pontuacao = 0;


// CARREGAR PERGUNTA

function carregarPergunta(){

const perguntaAtual = perguntas[indicePergunta];

document.getElementById("question").innerText = perguntaAtual.pergunta;

const answersDiv = document.getElementById("answers");

answersDiv.innerHTML = "";


perguntaAtual.respostas.forEach((resposta, index)=>{

const botao = document.createElement("div");

botao.classList.add("answer");

botao.innerText = resposta;

botao.onclick = ()=> responder(index);

answersDiv.appendChild(botao);

});


atualizarProgresso();

}


// RESPONDER

function responder(indiceResposta){

if(indiceResposta === perguntas[indicePergunta].correta){

pontuacao++;

}

document.getElementById("score").innerText = "Pontuação: " + pontuacao;

indicePergunta++;


if(indicePergunta < perguntas.length){

setTimeout(()=>{

carregarPergunta();

},400);

}
else{

mostrarVenda();

}

}


// ATUALIZAR BARRA

function atualizarProgresso(){

let progresso = ((indicePergunta) / perguntas.length) * 100;

document.getElementById("progress").style.width = progresso + "%";

}


// MOSTRAR PÁGINA DE VENDA

function mostrarVenda(){

document.getElementById("quiz-container").style.display="none";

document.getElementById("sales-page").style.display="block";

document.getElementById("resultado").innerText =
"Você acertou " + pontuacao + " de " + perguntas.length + " perguntas!";
}


// INICIAR QUIZ

carregarPergunta();

const comentariosData = [

{nome:"Lucas", texto:"Comprei e usei no grupo de jovens. Foi muito bom!"},

{nome:"Mariana", texto:"Achei que sabia muito da Bíblia... errei várias 😂"},

{nome:"Rafael", texto:"Muito legal esse quiz, recomendo!"},

{nome:"Juliana", texto:"Usei no estudo bíblico e todo mundo participou."},

{nome:"Pedro", texto:"As perguntas são muito boas mesmo."}

];

function adicionarComentario(){

const container = document.getElementById("comentarios");

if(!container) return;

const random = comentariosData[Math.floor(Math.random()*comentariosData.length)];

const comentario = document.createElement("div");

comentario.classList.add("comentario");

comentario.innerHTML = `

<div class="avatar">${random.nome[0]}</div>

<div class="comentario-texto">

<div class="nome">${random.nome}</div>

<div>${random.texto}</div>

</div>

`;

container.prepend(comentario);

if(container.children.length > 4){

container.removeChild(container.lastChild);

}

}

setInterval(adicionarComentario,4000);
