
const menuLinks = document.querySelectorAll('.menu a');
 
menuLinks.forEach((link) => {
    link.addEventListener('click', clickFetch)
})

function clickFetch(event) {  
    event.preventDefault()
    fetchFood(event.target.href)
    window.history.pushState(null, null, event.target.href)
}

async function fetchFood(url) {
    const fetchPage = await fetch(url)
    const receberFecth = await fetchPage.text()
    replaceFetch(receberFecth)
}

function replaceFetch(newText) {
    const criarElement = document.createElement('div')
    criarElement.innerHTML = newText;

    const cardapio = document.querySelector('.cardapio-2')
    const cardapio3 = criarElement.querySelector('.cardapio-2')
    cardapio.innerHTML = cardapio3.innerHTML
    document.title = criarElement.querySelector('title').innerText
}

window.addEventListener('popstate', () => {
    fetchFood(window.location.href)
})


// ABRIR E FECHAR CARRINHO...

const btnCarrinho = document.querySelector('.btn-carrinho');
const cartCarrinho = document.querySelector('#carrinho');
const btnFechar = document.querySelector('.btn-fechar');

const clickCart = (event) => {
    event.preventDefault();
    cartCarrinho.classList.add('ativo');
}
btnCarrinho.addEventListener('click', clickCart);

const clickRemove = () => {
    cartCarrinho.classList.remove('ativo');
}
btnFechar.addEventListener('click', clickRemove);












// ADICIONAR PRODUTOS NO CARRINHO....


const addCart = () => {
    const sacola = document.querySelector('#sacola');
    const Xsalada = document.querySelector('#X-salada').innerHTML;
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('ativo');
    novaDiv.innerHTML = Xsalada;
    sacola.appendChild(novaDiv)
}


const addCartSalada = () => {
    const sacola = document.querySelector('#sacola');
    const miniSalda = document.querySelector('#Mini-salada').innerHTML;
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('ativo');
    novaDiv.innerHTML = miniSalda
    sacola.appendChild(novaDiv);
}


const addCartDuplo = () => {
    const sacola = document.querySelector('#sacola');
    const duploCarne = document.querySelector('#DuploCarne').innerHTML;
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('ativo');
    novaDiv.innerHTML = duploCarne
    sacola.appendChild(novaDiv);
};


const addCartPizza = () => {
    const sacola = document.querySelector('#sacola');
    const pizzaBacon = document.querySelector('#pizza-bacon').innerHTML;
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('ativo');
    novaDiv.innerHTML = pizzaBacon
    sacola.appendChild(novaDiv);
}


const addCartCerveja = () => {
    const sacola = document.querySelector('#sacola');
    const cerveja = document.querySelector('#cerveja').innerHTML;
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('ativo');
    novaDiv.innerHTML = cerveja
    sacola.appendChild(novaDiv);
}


const addCartDrink = () => {
    const sacola = document.querySelector('#sacola');
    const drink = document.querySelector('#drink').innerHTML;
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('ativo');
    novaDiv.innerHTML = drink
    sacola.appendChild(novaDiv);
}


const addCartRefri = () => {
    const sacola = document.querySelector('#sacola');
    const refigerante = document.querySelector('#Refrigerante').innerHTML;
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('ativo');
    novaDiv.innerHTML = refigerante
    sacola.appendChild(novaDiv);
}


const addCartDoce = () => {
    const sacola = document.querySelector('#sacola');
    const doce = document.querySelector('#doce').innerHTML;
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('ativo');
    novaDiv.innerHTML = doce
    sacola.appendChild(novaDiv);
}


const addCartdoceOn = () => {
    const sacola = document.querySelector('#sacola');
    const doce = document.querySelector('#doce2').innerHTML;
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('ativo');
    novaDiv.innerHTML = doce
    sacola.appendChild(novaDiv);
}


const addBatataFrita = () => {
    const sacola = document.querySelector('#sacola');
    const batataFrita = document.querySelector('#batata-frita').innerHTML;
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('ativo');
    novaDiv.innerHTML = batataFrita
    sacola.appendChild(novaDiv);
}


const addCartBatatafrita2 = () => {
    const sacola = document.querySelector('#sacola');
    const batataFrita2 = document.querySelector('#batata-frita2').innerHTML;
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('ativo');
    novaDiv.innerHTML = batataFrita2
    sacola.appendChild(novaDiv);
}


const clickMenos = () => {
    const inputNumber = document.getElementById('number')
    const taxaItem = document.querySelector('.totall');
    const precoProduto = document.getElementById('preco').innerText
    const totalProduto = Math.abs(precoProduto * inputNumber.value - 30);
    taxaItem.innerText = totalProduto
     inputNumber.value--
     if(inputNumber.value <= 0) {
        inputNumber.value = 0;
     }
}


const clickMais = () => {
    const inputNumber = document.getElementById('number')
    const taxaItem = document.querySelector('.totall');
    const precoProduto = document.getElementById('preco').innerText
    const totalProduto = precoProduto * inputNumber.value + 30
    taxaItem.innerText = totalProduto
     inputNumber.value ++
}

