const inicio = document.getElementById('inicio');
inicio.addEventListener('click', start);


function start() { // Inicio da função start()

	$("#inicio").hide();

    $("#fundoGame").append("<div id='energia'></div>");
    $("#fundoGame").append("<div id='placar'></div>");
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //Principais variáveis do jogo
    let fimdejogo=false;
    let podeAtirar = true;
    let jogo = {}

    let velocidade = 5;
    let posicaoY = parseInt(Math.random() * 334);

    let pontos=0;
    let salvos=0;
    let perdidos=0;

    let energiaAtual=3;

    //Sons
    const somDisparo=document.getElementById("somDisparo");
    const somExplosao=document.getElementById("somExplosao");
    const musica=document.getElementById("musica");
    const somGameover=document.getElementById("somGameover");
    const somPerdido=document.getElementById("somPerdido");
    const somResgate=document.getElementById("somResgate");
    //Musica em loop
    musica.addEventListener("ended", function(){ musica.currentTime = 0; musica.play(); }, false);
    musica.play();


	const TECLA = {
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
        moveinimigo1();
        moveinimigo2();
        moveamigo();
        colisao();
        placar();
        energia();
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
            disparo();
            //Chama função Disparo	
        }
    
    } // fim da função movejogador()

    function moveinimigo1() {

        posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left",posicaoX-velocidade);
        $("#inimigo1").css("top",posicaoY);
            
        if (posicaoX<=0) {
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left",694);
            $("#inimigo1").css("top",posicaoY);
                
        }
    } //Fim da função moveinimigo1()

    function moveinimigo2() {
        posicaoX = parseInt($("#inimigo2").css("left"));
	    $("#inimigo2").css("left",posicaoX-3);
				
		if (posicaoX <= 0) {
		    $("#inimigo2").css("left",775);
		}
    } // Fim da função moveinimigo2()
    function moveamigo() {
	
        posicaoX = parseInt($("#amigo").css("left"));
        $("#amigo").css("left",posicaoX+1);
                    
        if (posicaoX > 906) {
            $("#amigo").css("left",0);        
        }
    
    } // fim da função moveamigo()

    function disparo() {
	
        if (podeAtirar==true) {
            somDisparo.play();
            
            podeAtirar=false;
            
            topo = parseInt($("#jogador").css("top"))
            posicaoX= parseInt($("#jogador").css("left"))
            tiroX = posicaoX + 190;
            topoTiro=topo+37;
            $("#fundoGame").append("<div id='disparo'></div");
            $("#disparo").css("top",topoTiro);
            $("#disparo").css("left",tiroX);
            
            var tempoDisparo=window.setInterval(executaDisparo, 30);
        
        } //Fecha podeAtirar
     
        function executaDisparo() {
            posicaoX = parseInt($("#disparo").css("left"));
            $("#disparo").css("left",posicaoX+15); 

            if (posicaoX>900) {                 
                window.clearInterval(tempoDisparo);
                tempoDisparo=null;
                $("#disparo").remove();
                podeAtirar=true;
            }
        } // Fecha executaDisparo()
    } // Fecha disparo()

    function colisao() {
        var colisao1 = ($("#jogador").collision($("#inimigo1")));
        var colisao2 = ($("#jogador").collision($("#inimigo2")));
        var colisao3 = ($("#disparo").collision($("#inimigo1")));
        var colisao4 = ($("#disparo").collision($("#inimigo2")));
        var colisao5 = ($("#jogador").collision($("#amigo")));
        var colisao6 = ($("#inimigo2").collision($("#amigo")));
        
        // jogador com o inimigo1
        if (colisao1.length > 0) {        
            inimigo1X = parseInt($("#inimigo1").css("left"));
            inimigo1Y = parseInt($("#inimigo1").css("top"));
            explosao1(inimigo1X,inimigo1Y);
        
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left",694);
            $("#inimigo1").css("top",posicaoY);
            energiaAtual--;
        }

        // jogador com o inimigo2 
        if (colisao2.length>0) {
            
            inimigo2X = parseInt($("#inimigo2").css("left"));
            inimigo2Y = parseInt($("#inimigo2").css("top"));
            explosao2(inimigo2X,inimigo2Y);
                    
            $("#inimigo2").remove();
                
            reposicionaInimigo2();
            energiaAtual--;
        }

        // Disparo com o inimigo1
		
        if (colisao3.length>0) {
            
            
            inimigo1X = parseInt($("#inimigo1").css("left"));
            inimigo1Y = parseInt($("#inimigo1").css("top"));
                
            explosao1(inimigo1X,inimigo1Y);
            $("#disparo").css("left",950);
                
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left",694);
            $("#inimigo1").css("top",posicaoY);
            pontos=pontos+100;
            velocidade=velocidade+0.3;
                
        }
        if (colisao4.length>0) {
        
            inimigo2X = parseInt($("#inimigo2").css("left"));
            inimigo2Y = parseInt($("#inimigo2").css("top"));
            $("#inimigo2").remove();
        
            explosao2(inimigo2X,inimigo2Y);
            $("#disparo").css("left",950);
            
            reposicionaInimigo2();
            pontos=pontos+50;                
        }

        // jogador com o amigo
                
        if (colisao5.length>0) {
                
            reposicionaAmigo();
            $("#amigo").remove();
            salvos++;
            somResgate.play();
        }
        
        // Inimigo 2 com amigo
        if (colisao6.length>0) {
	    
            amigoX = parseInt($("#amigo").css("left"));
            amigoY = parseInt($("#amigo").css("top"));
            explosao3(amigoX,amigoY);
            $("#amigo").remove();
                    
            reposicionaAmigo();
            perdidos++;
                    
        }
    
    } //Fim da função colisao()

    //Explosão 1
    function explosao1(inimigo1X,inimigo1Y) {
        somExplosao.play();
        $("#fundoGame").append("<div id='explosao1'></div");
        $("#explosao1").css("background-image", "url(assets/imgs/explosao.png)");
        var div=$("#explosao1");
        div.css("top", inimigo1Y);
        div.css("left", inimigo1X);
        div.animate({width:200, opacity:0}, "slow");
        
        var tempoExplosao=window.setInterval(removeExplosao, 1000);
        
        function removeExplosao() {
            div.remove();
            window.clearInterval(tempoExplosao);
            tempoExplosao=null;
            
        }
            
    } // Fim da função explosao1()

	function explosao2(inimigo2X,inimigo2Y) {
        somExplosao.play();
        $("#fundoGame").append("<div id='explosao2'></div");
        $("#explosao2").css("background-image", "url(assets/imgs/explosao.png)");
        var div2=$("#explosao2");
        div2.css("top", inimigo2Y);
        div2.css("left", inimigo2X);
        div2.animate({width:200, opacity:0}, "slow");
        
        var tempoExplosao2=window.setInterval(removeExplosao2, 1000);
        function removeExplosao2() {
            div2.remove();
            window.clearInterval(tempoExplosao2);
            tempoExplosao2=null;   
        }  
    } // Fim da função explosao2()

    function explosao3(amigoX,amigoY) {
        somPerdido.play();
        $("#fundoGame").append("<div id='explosao3' class='anima4'></div");
        $("#explosao3").css("top",amigoY);
        $("#explosao3").css("left",amigoX);
        var tempoExplosao3=window.setInterval(resetaExplosao3, 1000);
        function resetaExplosao3() {
            $("#explosao3").remove();
            window.clearInterval(tempoExplosao3);
            tempoExplosao3=null;   
        }
    } // Fim da função explosao3

    function placar() {
	
        $("#placar").html("<h2> Pontos: " + pontos + " Salvos: " + salvos + " Perdidos: " + perdidos + "</h2>");
        
    } //fim da função placar()

	function reposicionaInimigo2() {
	
        var tempoColisao4=window.setInterval(reposiciona4, 5000);
            
        function reposiciona4() {
            window.clearInterval(tempoColisao4);
            tempoColisao4=null;
                
            if (fimdejogo==false) {
                $("#fundoGame").append("<div id=inimigo2></div");
            }
            
        }	
    }

    function reposicionaAmigo() {
	
        var tempoAmigo=window.setInterval(reposiciona6, 6000);
        
        function reposiciona6() {
            window.clearInterval(tempoAmigo);
            tempoAmigo=null;
            
            if (fimdejogo==false) {
                $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
            }
        }
    } // Fim da função reposicionaAmigo()
    
    function energia() {
	
        switch(energiaAtual){
            case 3:
                $("#energia").css("background-image", "url(assets/imgs/energia3.png)");
                break;
            case 2:
                $("#energia").css("background-image", "url(assets/imgs/energia2.png)");
                break;
            case 1:
                $("#energia").css("background-image", "url(assets/imgs/energia1.png)");
                break;
            case 0:
                $("#energia").css("background-image", "url(assets/imgs/energia0.png)");
                //Game Over
                break;
            default:
                let err = new Error("Energia em um valor inválido!");
                throw err;	
	    } // Fim da função energia()
    }


} // Fim start