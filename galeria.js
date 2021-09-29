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

//replace -> substituir | split ->criar um array
const limparId = (url) => url.replace("./img/", "").split(".")[0].replace(" ", "-")

const criarItem = (urlmagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlmagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src= "${urlmagem}" alt="">`

    container.appendChild(novoLink)

//     container.innerHTML  += ` 
//     <a href= "${urlmagem}" class="galeria-itens">
//     <img src= "${urlmagem}" alt="">
// </a>
 //não é correto//     `
}
const carregarGaleria = (imagens) =>  imagens.forEach(criarItem)

const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const novoDiv = document.createElement("div")
    novoDiv.classList.add("slide")
    novoDiv.id = limparId(urlImagem)

    const indiceAnterior = indice <=0 ? arr.length -1 : indice -1
    const idAnterior = limparId(arr[indiceAnterior])

    const indiceProximo = indice >= arr.length -1 ? 0 : indice +1
    const idProximo = limparId(arr[indiceProximo]) 

    novoDiv.innerHTML = `
    <div class="imagem-container">
    <a href="" class="icones fechar">&#10006;</a>
    <a href="#${idAnterior}" class="icones anterior">&#171;</a>
    <img src="${urlImagem}" alt="">
    <a href="#${idProximo}" class="icones proximo">&#187;</a>
    </div>
    `

    container.appendChild(novoDiv)
}

const carregarSlide = (imagens) => imagens.forEach(criarSlide)

carregarGaleria (imagens)
carregarSlide(imagens)



