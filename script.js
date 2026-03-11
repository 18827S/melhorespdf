// CONTADOR DE ESCASSEZ

let tempo = 600; // 10 minutos

function atualizarContador(){

let minutos = Math.floor(tempo / 60);
let segundos = tempo % 60;

if(segundos < 10){
segundos = "0" + segundos;
}

document.getElementById("countdown").innerText = minutos + ":" + segundos;

if(tempo > 0){
tempo--;
}

}

setInterval(atualizarContador,1000);



// CONTADOR DE PESSOAS NA PÁGINA

let viewers = 18;

function atualizarViewers(){

let variacao = Math.floor(Math.random() * 5) - 2;

viewers = viewers + variacao;

if(viewers < 12){
viewers = 12;
}

if(viewers > 34){
viewers = 34;
}

document.getElementById("viewers").innerText = viewers;

}

setInterval(atualizarViewers,4000);




// POPUP DE COMPRAS

const nomes = [

"Lucas",
"Maria",
"Pedro",
"Ana",
"Gabriel",
"Rafael",
"Beatriz",
"João",
"Samuel",
"Daniel"

];

function mostrarPopup(){

const popup = document.getElementById("popup");

let nome = nomes[Math.floor(Math.random()*nomes.length)];

popup.innerText = nome + " acabou de comprar o Quiz Bíblico";

popup.style.display = "block";

setTimeout(()=>{

const nomes = [
"Lucas","Maria","Pedro","Ana","Gabriel",
"Rafael","Beatriz","João","Samuel","Daniel"
];

const cidades = [
"São Paulo","Rio de Janeiro","Fortaleza",
"Curitiba","Salvador","Recife",
"Belo Horizonte","Brasília"
];

function mostrarPopup(){

const popup = document.getElementById("popup");

let nome = nomes[Math.floor(Math.random()*nomes.length)];

let cidade = cidades[Math.floor(Math.random()*cidades.length)];

popup.innerHTML = `
<div class="popup-icon">✓</div>
<div>
<strong>${nome}</strong> de ${cidade}<br>
acabou de comprar o Quiz Bíblico
</div>
`;

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

},4000);

}

setInterval(mostrarPopup,9000);
