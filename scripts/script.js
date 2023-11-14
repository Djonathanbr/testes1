const canvas = document.querySelector("#imagem-refeitorio");
const contexto = canvas.getContext('2d');
canvas.width = 1080;
canvas.height = 1080;
canvas.style.border = "2px solid black";

const cores = {
    verde: "#60B594",
    verdeLaranja: "#8EB28A",
    laranja: "#FFAE7F",
    laranjaVerde: "#D3B285",
    preto: "#000"
}

const logoIff = new Image()
logoIff.src = "../imagens/logo.png"




window.addEventListener('load',()=>{
    contexto.drawImage(logoIff,0,0)
    criarCabecalho()
    criarCorpo()
    criarCorpo2()
    
})

function criarCorpo() {
    const diasSemana = ["Segunda","Terça","Quarta","Quinta","Sexta","Sábado","Domingo"];

    const alturaRetangulo = (canvas.height - logoIff.height) / 7;
    const larguraRetangulo = logoIff.width;
    const posicaoX = 0;
    const posicaoY = logoIff.height;
    // posso separar depois
    const posXtexto = 20
    const posYtexto = (logoIff.height) + (alturaRetangulo / 2) + 10
    for (let i = 0; i < diasSemana.length; i++) {
        const posY = posicaoY + i * alturaRetangulo;
        const cor = i % 2 === 0 ? cores.verde : cores.verdeLaranja;
        
        contexto.fillStyle = cores.preto
        contexto.font = "bold 32px open sans"
        contexto.fillText(diasSemana[0],posXtexto,posYtexto)

        contexto.fillStyle = cor;
        contexto.fillRect(posicaoX, posY, larguraRetangulo, alturaRetangulo);
    }


}
function criarCorpo2() {
    const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

    const alturaRetangulo = (canvas.height - logoIff.height) / 7;
    const larguraRetangulo = (canvas.width - logoIff.width) / 3;
    const posicaoX = logoIff.width;
    const posicaoY = logoIff.height;

    for (let i = 0; i < diasSemana.length; i++) {
        const posY = posicaoY + (i * alturaRetangulo);     
        for (let j = 0; j < 3; j++) {
            const posXNovo = posicaoX + (j * larguraRetangulo);
            let cor
            if (i % 2 === 0) {
                cor = j === 0 ? cores.laranjaVerde : j === 1 ? cores.verde : cores.laranjaVerde;
            } else {
                cor = j === 0 ? cores.laranja : j === 1 ? cores.verdeLaranja : cores.laranja;
            }

            contexto.fillStyle = cor;
            contexto.fillRect(posXNovo, posY, larguraRetangulo, alturaRetangulo);
        }
    }
}










// Completo so falta Adicionar os textos
function criarCabecalho() {
    function criarRetanguloData() {
        contexto.fillStyle = cores.verde
        const alturaRetangulo = logoIff.height/2
        const larguraRetangulo = canvas.width - logoIff.width
        const posicaoX = logoIff.width
        const posicaoY = 0
        contexto.fillRect(posicaoX,posicaoY,larguraRetangulo,alturaRetangulo)
    
        // posso separar depois
        const texto = `Cardápio da Semana ${pegarSemana()}`
        contexto.fillStyle = cores.preto
        contexto.font = "bold 50px open sans"
        contexto.fillText(texto,(posicaoX+50),((posicaoY + alturaRetangulo) - 35))
    }

    function criarRetanguloCafe() {
        contexto.fillStyle = cores.laranja
        const alturaRetangulo = logoIff.height/2
        const larguraRetangulo = (canvas.width - logoIff.width)/3
        const posicaoX = logoIff.width
        const posicaoY = alturaRetangulo
        contexto.fillRect(posicaoX,posicaoY,larguraRetangulo,alturaRetangulo)
    }
    function criarRetanguloAlmoco() {
        contexto.fillStyle = cores.verdeLaranja
        const alturaRetangulo = logoIff.height/2
        const larguraRetangulo = (canvas.width - logoIff.width)/3
        const posicaoX = logoIff.width + larguraRetangulo
        const posicaoY = alturaRetangulo
        contexto.fillRect(posicaoX,posicaoY,larguraRetangulo,alturaRetangulo)
    }
    function criarRetanguloJanta() {
        contexto.fillStyle = cores.laranja
        const alturaRetangulo = logoIff.height/2
        const larguraRetangulo = (canvas.width - logoIff.width)/3
        const posicaoX = logoIff.width + (larguraRetangulo * 2)
        const posicaoY = alturaRetangulo
        contexto.fillRect(posicaoX,posicaoY,larguraRetangulo,alturaRetangulo)
    }
    
    function pegarSemana() {
        const data = new Date();
        const diaInicio = data.getDate() - data.getDay() + 1;
        const diaFim = diaInicio + 6;
        const mes = data.getMonth() + 1;
        const ano = data.getFullYear();
    
        const ultimoDiaDoMes = new Date(ano, mes, 0).getDate();
        const diaFimCorrigido = diaFim > ultimoDiaDoMes ? ultimoDiaDoMes : diaFim;
    
        console.log(`(${diaInicio}/${mes} a ${diaFimCorrigido}/${mes})`);
        return `(${diaInicio}/${mes} a ${diaFimCorrigido}/${mes})`
    }

    criarRetanguloData()
    criarRetanguloCafe()
    criarRetanguloAlmoco()
    criarRetanguloJanta()
}




