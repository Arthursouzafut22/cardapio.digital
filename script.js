

const jsonUrls = {
  bebidas: './data/bebidas.json',
  doces: './data/doces.json',
  hamburguers: './data/hamburgue.json',
  pizzas: './data/pizza.json',
  fritas: './data/fritas.json',
};

let produtosListados = [];
document.addEventListener('DOMContentLoaded', () => {
  fetchProdutos('hamburguers');
  mudarValorTotal();
});

async function fetchProdutos(tipo) {
  const todosTipos = ['bebidas', 'doces', 'fritas', 'pizzas', 'hamburguers'];
  if (!todosTipos.includes(tipo)) return alert('Tipo inválido');

  const url = jsonUrls[tipo];
  const response = await fetch(url);
  const produtos = await response.json();

  listaProdutos(produtos);
}

function listaProdutos(produtos) {
  const cardapio = document.getElementById('cardapio');

  cardapio.innerHTML = '';
  produtosListados = produtos;

  for (const produto of produtos) {
    const novoProduto = criaProduto(produto);

    cardapio.innerHTML += novoProduto;
  }
}

function criaProduto(produto) {
  return `
    <div class="hamburguer">
    <div class="cont-burgue">
      <img
        class="img-burguer "
        src="${produto.image}"
        alt="burgue1"
      />
    </div>

    <div class="rating">
      <input value="5" name="rate" id="star5" type="radio" />
      <label title="text" for="star5"></label>
      <input value="4" name="rate" id="star4" type="radio" />
      <label title="text" for="star4"></label>
      <input value="3" name="rate" id="star3" type="radio" checked="" />
      <label title="text" for="star3"></label>
      <input value="2" name="rate" id="star2" type="radio" />
      <label title="text" for="star2"></label>
      <input value="1" name="rate" id="star1" type="radio" />
      <label title="text" for="star1"></label>
    </div>
    <p class="valor">${produto.preco}</p>
    <p>${produto.nome}</p>
    <div class="conteiner-btns">
      <button>
        <img
          class="img-geral"
          src="logos/olho-com-cilio.png"
          alt="olho"
        />
      </button>
      <button onclick="addProdutoCarrinho(${produto.id})">
        <img
          class="img-geral"
          src="logos/carrinho-de-compras-de-design-xadrez.png"
          alt=""
        />
      </button>
    </div>
  </div>
    `;
}

function createElementFromHTML(htmlString) {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  return div.firstChild;
}

function addProdutoCarrinho(id) {
  const sacola = document.getElementById('sacola');
  const produto = produtosListados.find((produto) => produto.id === id);

  const elementos = document.querySelectorAll('div[data-type]');
  const elementosArray = Array.from(elementos);
  const produtoCarrinhoString = criaProdutoCarrinho(produto);
  const produtoCarrinho = createElementFromHTML(produtoCarrinhoString);

  const elemento = elementosArray.find((element) => {
    const tipo = element.getAttribute('data-type');

    return id === Number(element.id) && produto.tipo === tipo;
  });

  if (!elemento) {
    sacola.appendChild(produtoCarrinho);
  } else {
    const input = elemento.getElementsByTagName('input')[0];

    input.value = Number(input.value) + 1;
  }

  mudarValorTotal();
}

function mudarValorTotal() {
  const elementos = document.querySelectorAll('div[data-type]');

  let valorTotal = 0.0;

  for (const elemento of elementos) {
    const preco = elemento.querySelector('#preco').innerHTML;
    const input = elemento.getElementsByTagName('input')[0];
    const novoPreco = Number(preco.replace(/\D/g, '').slice(0, -2));

    const valor = novoPreco * parseInt(input.value);

    valorTotal += Number(valor.toFixed(2));
  }

  const totalItem = document.querySelector('#total');
  totalItem.innerHTML = valorTotal.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}

function mudaQuantidadeProduto(acao, id, tipoProduto) {
  const acoes = ['menos', 'mais'];
  const elementos = document.querySelectorAll('div[data-type]');
  const elementosArray = Array.from(elementos);

  if (!acoes.includes(acao)) return alert('Açai inválida');

  const elementoProduto = elementosArray.find((element) => {
    const tipo = element.getAttribute('data-type');

    return id === Number(element.id) && tipoProduto === tipo;
  });

  const input = elementoProduto.getElementsByTagName('input')[0];

  const value = Number(input.value);

  if (acao === 'menos') {
    if (value === 0) return elementoProduto.remove();

    input.value = value - 1;
  } else {
    input.value = value + 1;
  }
  mudarValorTotal();
}

function criaProdutoCarrinho(produto) {
  return `
    <div id="${produto.id}" data-type="${produto.tipo}" class="ativo">
      <div class="cart-food">
        <img class="imgBurgue-carrinho" src="${produto.image}" alt="" />
        <div class="paragrafos-carrinho">
          <p class="nome">${produto.nome}</p>
          <p class="gramas">500g</p>
        </div>
      </div>

      <div class="conteiner-sacola">
        <span id="preco">${produto.preco}</span>
        <div class="controlador">
          <button class="btn-menos" onclick="mudaQuantidadeProduto('menos', ${produto.id}, '${produto.tipo}')">
            <img src="logos/operacoes-de-calculo-menos-sinal.png" alt="" />
          </button>
          <input type="number" name="" id="number" value="1" />
          <button class="btn-mais" onclick="mudaQuantidadeProduto('mais', ${produto.id}, '${produto.tipo}')">
            <img src="logos/botao-de-simbolo-de-mais.png" alt="" />
          </button>
        </div>
      </div>
    </div>
    `;
}

// ABRIR E FECHAR CARRINHO...

const btnCarrinho = document.querySelector('.btn-carrinho');
const cartCarrinho = document.querySelector('#carrinho');
const btnFechar = document.querySelector('.btn-fechar');

const clickCart = (event) => {
  event.preventDefault();
  cartCarrinho.classList.add('ativo');
};
btnCarrinho.addEventListener('click', clickCart);

const clickRemove = () => {
  cartCarrinho.classList.remove('ativo');
};
btnFechar.addEventListener('click', clickRemove);