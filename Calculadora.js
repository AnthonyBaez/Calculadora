window.onload=manejarClics;

var cifra1="";
var control=true;

function manejarClics() {
	
	var uno=document.getElementById("uno");
	uno.addEventListener("click",function() {
								clicEn("1");
								});

	var dos=document.getElementById("dos");
	dos.addEventListener("click",function() {
								clicEn("2");
								});
	var tres=document.getElementById("tres");
	tres.addEventListener("click",function() {
								clicEn("3");
								});
	var cuatro=document.getElementById("cuatro");
	cuatro.addEventListener("click",function() {
								clicEn("4");
								});
	var cinco=document.getElementById("cinco");
	cinco.addEventListener("click",function() {
								clicEn("5");
								});
	var seis=document.getElementById("seis");
	seis.addEventListener("click",function() {
								clicEn("6");
								});
	var siete=document.getElementById("siete");
	siete.addEventListener("click",function() {
								clicEn("7");
								});
	var ocho=document.getElementById("ocho");
	ocho.addEventListener("click",function() {
								clicEn("8");
								});
	var nueve=document.getElementById("nueve");
	nueve.addEventListener("click",function() {
								clicEn("9");
								});
	var cero=document.getElementById("cero");
	cero.addEventListener("click",function() {
								clicEn("0");
								});


	var suma=document.getElementById("suma");
	suma.addEventListener("click",function() {
								clicEn("+");
								});
	var resta=document.getElementById("resta");
	resta.addEventListener("click",function() {
								clicEn("-");
								});
	var divi=document.getElementById("divi");
	divi.addEventListener("click",function() {
								clicEn("/");
								});
	var multi=document.getElementById("multi");
	multi.addEventListener("click",function() {
								clicEn("*");
								});
	var punto=document.getElementById("punto");
	punto.addEventListener("click",function() {
								clicEn(".");
								});
	var borrar=document.getElementById("borrar");
	borrar.addEventListener("click",function() {
								oper();
								});
	var igual=document.getElementById("igual");
	igual.addEventListener("click",function() {
								calcular();
								});
}

function clicEn(num){
	var ver=document.getElementById("tabla");
	cifra1 +=num;
	ver.textContent=cifra1;
	
}
function calcular(){
	var resultado=eval(cifra1);
	var fin=document.getElementById("tabla");
	fin.textContent=resultado;
}
function oper(){
	cifra1="";
	var fin=document.getElementById("tabla");
	fin.textContent=cifra1;
}
