
var altura = 0
var largura = 0 
var vidas = 1
var tempo = 10

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', ' ')

if (nivel === ' normal') {
	criaMosquitoTempo = 1500

}else if (nivel === 'dificil') {
	criaMosquitoTempo = 1000

}else if(nivel === 'chucknorris'){
	criaMosquitoTempo = 750

}


function ajustaTamanhoPalcoJogo( ) {
	 altura = window.innerHeight
	 largura = window.innerWidth 
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

	tempo -= 1
	
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href ='vitoria.html'

	}else{

		document.getElementById('cronometro').innerHTML = tempo}

	}, 1000)

function posicaoRandomica(){


	// Remove automaticamente um mosquito
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		// Fim de jogo
		if(vidas > 3){
			window.location.href = 'fim_de_jogo.html'
		}else{
		document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
		 
		vidas++}
	}

	// document.getElementById('mosquito').remove() - Para remover o id existente (caso exista) 

	/*Criando Posições aleatórias*/
	var posicaoX = Math.floor(Math.random()/*numero aleatório*/ * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX

	posicaoYb = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	/*Criar elemento HTML*/
	var mosquito = document.createElement('img')

	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()

	}

	document.body.appendChild(mosquito)



	}

// Alterando o tamanho de cada mosquito automaticamente

	function tamanhoAleatorio(){
		var classe = Math.floor(Math.random() * 3)

		switch(classe){

		case 0:
			return 'mosquito1'

		case 1:

			return 'mosquito2'

		case 2:
			return 'mosquito3'

		}
	}

	function ladoAleatorio(){
		var classe = Math.floor(Math.random() * 2)

		switch(classe){

		case 0:
			return 'ladoA'

		case 1:

			return 'ladoB'
		}


}

