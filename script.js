// ESPERA O SITE CARREGAR

document.addEventListener("DOMContentLoaded", function () {


// =========================
// CONTADOR DE ESCASSEZ
// =========================

let tempo = 600; // 10 minutos

function atualizarContador(){

const contador = document.getElementById("countdown");

if(!contador) return;

let minutos = Math.floor(tempo / 60);
let segundos = tempo % 60;

segundos = segundos < 10 ? "0" + segundos : segundos;

contador.innerText = minutos + ":" + segundos;

if(tempo > 0){
tempo--;
}

}

setInterval(atualizarContador,1000);



// =========================
// CONTADOR DE PESSOAS
// =========================

let viewers = 18;

function atualizarViewers(){

const viewersElement = document.getElementById("viewers");

if(!viewersElement) return;

let variacao = Math.floor(Math.random() * 5) - 2;

viewers += variacao;

if(viewers < 12) viewers = 12;
if(viewers > 35) viewers = 35;

viewersElement.innerText = viewers;

}

setInterval(atualizarViewers,4000);



// =========================
// POPUP DE COMPRAS
// =========================

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

if(!popup) return;

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
.floating-buy{

position:fixed;

bottom:20px;

right:20px;

background:#27ae60;

color:white;

padding:15px 20px;

border-radius:50px;

font-weight:bold;

text-decoration:none;

box-shadow:0 10px 30px rgba(0,0,0,0.3);

z-index:999;

  }
});
