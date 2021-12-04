const inicio = document.getElementById('inicio');
inicio.addEventListener('click', start);


function start() { // Inicio da função start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //Principais variáveis do jogo
        
    var jogo = {}

	var TECLA = {
        W: 87,
        S: 83,
        D: 68
        }
    
    jogo.pressionou = [];

	//Verifica se o usuário pressionou alguma tecla	
	
	$(document).keydown((e) => jogo.pressionou[e.which] = true);
    
    
    $(document).keyup((e) => jogo.pressionou[e.which] = false);

    //Game Loop

    jogo.timer = setInterval(loop,30);

    function loop() {

    movefundo();
    movejogador();

    } // Fim da função loop()



    //Função que movimenta o fundo do jogo

    function movefundo() {

    esquerda = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position",esquerda-1);

    } // fim da função movefundo()

    function movejogador() {

        if (jogo.pressionou[TECLA.W]) {

            let topo = parseInt($("#jogador").css("top"));
            
            //O jogador pode subir até 0px;
            topo > 0 ? $("#jogador").css("top",topo-10) : $("#jogador").css("top", 0);
            

        }
        
        if (jogo.pressionou[TECLA.S]) {
            let topo = parseInt($("#jogador").css("top"));

            //O jogador pode descer até 434px;
            topo < 434 ? $("#jogador").css("top",topo+10) : $("#jogador").css("top",434);


        }
        
        if (jogo.pressionou[TECLA.D]) {
            //Chama função Disparo	
        }
    
    } // fim da função movejogador()

} // Fim start