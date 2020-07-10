let slide_ativo = '0';
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function menuSelect(tgt) {
	slide_ativo = tgt.substring(3, 6);
	let option = document.getElementById(tgt);
	option.selected = 1;
	let a = document.getElementById('conteudo');
	let b = document.getElementById('conteudo'+slide_ativo);
	a.innerHTML = b.innerHTML;
}
function avancaSlide() {
	let parse = parseInt(slide_ativo, 10)+1;
	if (parse<32) {
		let opt = document.getElementById('opt'+parse);
		opt.selected = 1;
		slide_ativo = parse;
	}
	let a = document.getElementById('conteudo');
	let b = document.getElementById('conteudo'+slide_ativo);
	a.innerHTML = b.innerHTML;
}
function voltaSlide() {
	let parse = parseInt(slide_ativo, 10)-1;
	if (parse>-1) {
		let opt = document.getElementById('opt'+parse);
		opt.selected = 1;
		slide_ativo = parse;
		let a = document.getElementById('conteudo');
		let b = document.getElementById('conteudo'+slide_ativo);
		a.innerHTML = b.innerHTML;
	}
}
function voltarAoInicio(tgt){
	slide_ativo = tgt.substring(3, 6);
	let option = document.getElementById(tgt);
	option.selected = 1;
	let a = document.getElementById('conteudo');
	let b = document.getElementById('conteudo0');
	a.innerHTML = b.innerHTML;
}