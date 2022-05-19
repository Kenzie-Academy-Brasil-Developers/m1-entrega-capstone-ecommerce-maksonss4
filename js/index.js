const carrinho = document.querySelector(".carrinho")
const carrinhoDeCompras = document.querySelector(".carrinhoDeCompras")
const listaDeItens = document.querySelector(".ulVitrine")
const divCarrinhoVazio = document.querySelector(".carrinhoVazio")

let pT = 0
let qT = 0

const tagDivQuantidadeETotal = document.createElement("div")
const tagp1QuantTotal = document.createElement("p")
console.log(tagp1QuantTotal)
const tagp2QuantTotal = document.createElement("p")

tagDivQuantidadeETotal.classList.add("quantidadeTotalPrecoTotal")
tagDivQuantidadeETotal.appendChild(tagp1QuantTotal)
tagDivQuantidadeETotal.appendChild(tagp2QuantTotal)

console.log(tagDivQuantidadeETotal)







function listarObjetosDoArray(arrayDeObjetos){

    for(let i = 0; i < arrayDeObjetos.length; i++){
        const objeto = arrayDeObjetos[i]
        const tagLi = criarLi(objeto)//
        listaDeItens.appendChild(tagLi)
    }

}
listarObjetosDoArray(data)

function criarLi(objeto){    
    // COLOCANDO AS INFORMAÇÕES DOS ELEMENTOS EM UMA VARIÁVEL
    const id        = objeto.id
    const imagem    = objeto.img
    const nome      = objeto.nameItem
    const descricao = objeto.description
    const preco     = objeto.value
    const carrinho  = objeto.addCart
    const tipo      = objeto.tag

    //CRIANDO ELEMENTOS DO CARD
    const tagLi         = document.createElement("li")
    const tagFigure     = document.createElement("figure")
    const tagImg        = document.createElement("img")
    const tagDiv        = document.createElement("div")
    const tagTipo       = document.createElement("p")
    const tagNome       = document.createElement("h2")
    const tagDescricao  = document.createElement("p")
    const tagPreco      = document.createElement("p")
    const tagButton     = document.createElement("button")

    //ADICIONANDO INFORMAÇÕES NOS ELEMENTOS
    tagLi.className        = "liVitrine"
    tagImg.src             = imagem
    tagImg.alt             = nome
    tagDiv.className       = "informacoes"
    tagTipo.innerText      = tipo
    tagTipo.className      = "tipoDeCard marginItensDivCard"
    tagNome.className      = "marginItensDivCard"
    tagNome.innerText      = nome
    tagDescricao.className = "marginItensDivCard"
    tagDescricao.innerText = descricao
    tagPreco.className     = "marginItensDivCard"
    tagPreco.innerText     = `R$${preco},00`
    tagButton.className    = "buttonCard marginItensDivCard"
    tagButton.innerText    = carrinho
    tagButton.id           = id
    tagButton.addEventListener("click", ()=>{
    adicionarAoCarrinho(objeto)})

    //MONTANDO O CARD (DIZER QUEM É FILHO DE QUEM)
    tagFigure.appendChild(tagImg)
    tagDiv.appendChild(tagTipo)
    tagDiv.appendChild(tagNome)
    tagDiv.appendChild(tagDescricao)
    tagDiv.appendChild(tagPreco)
    tagDiv.appendChild(tagButton)
    tagLi.appendChild(tagFigure)
    tagLi.appendChild(tagDiv)

    return tagLi
}

function adicionarAoCarrinho(objeto){   
    qT += 1
    pT += objeto.value

    tagp1QuantTotal.innerText = `Quantidade de produtos: ${qT}`
    tagp2QuantTotal.innerText = `Preço total: ${pT}`
    divCarrinhoVazio.remove()
    carrinhoDeCompras.appendChild(tagDivQuantidadeETotal)

    const tagImg = document.createElement("img")
    const tagDiv1 = document.createElement("div")
    const tagDiv2 = document.createElement("div")
    const tagNome = document.createElement("h3")
    const tagPreco = document.createElement("p")
    const tagRemover = document.createElement("button")

    tagDiv1.className = "itensDoCarrinho"
    tagImg.src = objeto.img
    tagDiv2.className = "itens"
    tagNome.innerText = objeto.nameItem
    tagPreco.innerText = objeto.value
    tagPreco.id = "x"
    tagRemover.innerText = "Remover produto" 
    tagRemover.addEventListener("click", (p)=>{                
        removerDoCarrinho(p.target.parentNode.parentNode)})

    tagDiv2.appendChild(tagNome)
    tagDiv2.appendChild(tagPreco)
    tagDiv2.appendChild(tagRemover)
    tagDiv1.appendChild(tagImg)
    tagDiv1.appendChild(tagDiv2)
    carrinho.insertAdjacentElement('afterbegin', tagDiv1)//adiciona itens ao início
}

function removerDoCarrinho(elemento){
    qT -= 1
    pT -= parseInt(elemento.querySelector("p").innerHTML)
    tagp1QuantTotal.innerText = `Quantidade de produtos: ${qT}`
    tagp2QuantTotal.innerText = `Preço total: ${pT}`
    elemento.remove()
    if(qT < 1){
        carrinho.appendChild(divCarrinhoVazio)
        tagDivQuantidadeETotal.remove()
    }
}

function somaDoArray(array){
    let total = 0
    for(let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total
}


