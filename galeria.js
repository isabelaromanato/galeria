"use strict"

const imagens = [
    "./img/imagem1.PNG",
    "./img/imagem2.PNG",
    "./img/imagem3.PNG",
    "./img/imagem4.PNG",
    "./img/imagem5.PNG",
    "./img/imagem6.PNG",
    "./img/imagem7.PNG",
    "./img/imagem8.PNG"

]

const criarItem = (urlmagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = urlmagem 
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src= "${urlmagem}" alt="">`

    container.appendChild(novoLink)

//     container.innerHTML  += ` 
//     <a href= "${urlmagem}" class="galeria-itens">
//     <img src= "${urlmagem}" alt="">
// </a>
 //não é correto//     `
}
const carregarImagens = () =>  imagens.forEach(criarItem)

carregarImagens()

