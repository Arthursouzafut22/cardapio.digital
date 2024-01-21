
// 30,00R$


// ADICIONAR PRODUTOS NO CARRINHO....


function teste()  {    
const addCart = () => {
    const sacola = document.querySelector('#sacola');
    const novaDiv = document.createElement('div');
    novaDiv.innerHTML = `
    <div id="X-salada">
  <div class="cart-food">
      <img class="imgBurgue-carrinho" src="img.hamburgue/burgue2.png" alt="">
      <div class="paragrafos-carrinho">
          <p class="nome">X-Salada</p>
          <p class="gramas">500g</p>
      </div>
  </div>
  <div class="conteiner-sacola">
      <span id="preco">30,00R$</span>
      <div class="controlador">
          <button class="btn-menos"><img src="logos/operacoes-de-calculo-menos-sinal.png" alt=""></button>
          <input type="number" name="" id="number" value="0">
          <button class="btn-mais"><img src="logos/botao-de-simbolo-de-mais.png" alt=""></button>
      </div>
  </div>
</div>`

   return sacola.appendChild(novaDiv)
};



const addCartSalada = () => {
    const sacola = document.querySelector('#sacola');
    const novaDiv = document.createElement('div');
    novaDiv.innerHTML = `
    <div id="Mini-salada">
  <div class="cart-food">
      <img class="imgBurgue-carrinho" src="img.hamburgue/burgue2.png" alt="">
      <div class="paragrafos-carrinho">
          <p class="nome">Mini-Salada</p>
          <p class="gramas">500g</p>
      </div>
  </div>
  <div class="conteiner-sacola">
      <span id="preco">20,00R$</span>
      <div class="controlador">
          <button class="btn-menos"><img src="logos/operacoes-de-calculo-menos-sinal.png" alt=""></button>
          <input type="number" name="" id="number" value="0">
          <button class="btn-mais"><img src="logos/botao-de-simbolo-de-mais.png" alt=""></button>
      </div>
  </div>
</div>`
    return sacola.appendChild(novaDiv)
}



const addCartDuplo = () => {
    const sacola = document.querySelector('#sacola');
    const novaDiv = document.createElement('div');
   
    novaDiv.innerHTML = `
    <div id="DuploCarne">
    <div class="cart-food">
        <img class="imgBurgue-carrinho" src="img.hamburgue/burgue1.png" alt="">
        <div class="paragrafos-carrinho">
            <p class="nome">Duplo Carne</p>
            <p class="gramas">500g</p>
        </div>
    </div>
    <div class="conteiner-sacola">
        <span id="preco">50,00R$</span>
        <div class="controlador">
            <button class="btn-menos"><img src="logos/operacoes-de-calculo-menos-sinal.png" alt=""></button>
            <input type="number" name="" id="number" value="0">
            <button class="btn-mais"><img src="logos/botao-de-simbolo-de-mais.png" alt=""></button>
        </div>
    </div>
</div>`
  
  return sacola.appendChild(novaDiv);
    
}


const addCartPizza = () => {
    const sacola = document.querySelector('#sacola');
    const novaDiv = document.createElement('div');
   
    novaDiv.innerHTML = `
    <div id="pizza-bacon">
  <div class="cart-food">
      <img class="imgBurgue-carrinho" src="img.pizza/pizza1.png" alt="">
      <div class="paragrafos-carrinho">
          <p class="nome">Pizza Bacon</p>
          <p class="gramas">500g</p>
      </div>
  </div>
  <div class="conteiner-sacola">
      <span id="preco">50,00R$</span>
      <div class="controlador">
          <button class="btn-menos"><img src="logos/operacoes-de-calculo-menos-sinal.png" alt=""></button>
          <input type="number" name="" id="number" value="0">
          <button class="btn-mais"><img src="logos/botao-de-simbolo-de-mais.png" alt=""></button>
      </div>
  </div>
</div> `

  return sacola.appendChild(novaDiv)
}



const addCartCerveja = () => {
    const sacola = document.querySelector('#sacola');
    const novaDiv = document.createElement('div');
   
    novaDiv.innerHTML = `
    <div id="cerveja">
    <div class="cart-food">
        <img class="imgBurgue-carrinho" src="bebidas/bebida1.png" alt="">
        <div class="paragrafos-carrinho">
            <p class="nome">Cerveja</p>
            <p class="gramas">500ml</p>
        </div>
    </div>
    <div class="conteiner-sacola">
        <span id="preco">50,00R$</span>
        <div class="controlador">
            <button class="btn-menos"><img src="logos/operacoes-de-calculo-menos-sinal.png" alt=""></button>
            <input type="number" name="" id="number" value="0">
            <button class="btn-mais"><img src="logos/botao-de-simbolo-de-mais.png" alt=""></button>
        </div>
    </div>
  </div>`

  return sacola.appendChild(novaDiv)
}



const addCartDrink = () => {
    const sacola = document.querySelector('#sacola');
    const novaDiv = document.createElement('div');
    novaDiv.innerHTML = `
    <div id="drink">
    <div class="cart-food">
        <img class="imgBurgue-carrinho" src="bebidas/bebida5.png" alt="">
        <div class="paragrafos-carrinho">
            <p class="nome">Drink</p>
            <p class="gramas">500ml</p>
        </div>
    </div>
    <div class="conteiner-sacola">
        <span id="preco">50,00R$</span>
        <div class="controlador">
            <button class="btn-menos"><img src="logos/operacoes-de-calculo-menos-sinal.png" alt=""></button>
            <input type="number" name="" id="number" value="0">
            <button class="btn-mais"><img src="logos/botao-de-simbolo-de-mais.png" alt=""></button>
        </div>
    </div>
  </div>`

  return sacola.appendChild(novaDiv);
}


const addCartRefri = () => {
    const sacola = document.querySelector('#sacola');
    const novaDiv = document.createElement('div');
    novaDiv.innerHTML = `
    <div id="Refrigerante">
    <div class="cart-food">
        <img class="imgBurgue-carrinho" src="bebidas/bebida8.png" alt="">
        <div class="paragrafos-carrinho">
            <p class="nome">Refrigerante</p>
            <p class="gramas">500ml</p>
        </div>
    </div>
    <div class="conteiner-sacola">
        <span id="preco">50,00R$</span>
        <div class="controlador">
            <button class="btn-menos"><img src="logos/operacoes-de-calculo-menos-sinal.png" alt=""></button>
            <input type="number" name="" id="number" value="0">
            <button class="btn-mais"><img src="logos/botao-de-simbolo-de-mais.png" alt=""></button>
        </div>
    </div>
  </div>`

  return sacola.appendChild(novaDiv);
}





const addCartDoce = () => {
    const sacola = document.querySelector('#sacola');
    const novaDiv = document.createElement('div');
    novaDiv.innerHTML = `
    <div id="doce">
    <div class="cart-food">
        <img class="imgBurgue-carrinho" src="doces/doce1.png" alt="">
        <div class="paragrafos-carrinho">
            <p class="nome">Doce</p>
            <p class="gramas">500g</p>
        </div>
    </div>
    <div class="conteiner-sacola">
        <span id="preco">50,00R$</span>
        <div class="controlador">
            <button class="btn-menos"><img src="logos/operacoes-de-calculo-menos-sinal.png" alt=""></button>
            <input type="number" name="" id="number" value="0">
            <button class="btn-mais"><img src="logos/botao-de-simbolo-de-mais.png" alt=""></button>
        </div>
    </div>
  </div>`

  return sacola.appendChild(novaDiv);
}



const addCartdoceOn = () => {
    const sacola = document.querySelector('#sacola');
    const novaDiv = document.createElement('div');
    novaDiv.innerHTML = `
    <div id="doce">
    <div class="cart-food">
        <img class="imgBurgue-carrinho" src="doces/doce2.png" alt="">
        <div class="paragrafos-carrinho">
            <p class="nome">Doce</p>
            <p class="gramas">500g</p>
        </div>
    </div>
    <div class="conteiner-sacola">
        <span id="preco">50,00R$</span>
        <div class="controlador">
            <button class="btn-menos"><img src="logos/operacoes-de-calculo-menos-sinal.png" alt=""></button>
            <input type="number" name="" id="number" value="0">
            <button class="btn-mais"><img src="logos/botao-de-simbolo-de-mais.png" alt=""></button>
        </div>
    </div>
  </div>`

  return sacola.appendChild(novaDiv)
}



const addBatataFrita = () => {
    const sacola = document.querySelector('#sacola');
    const novaDiv = document.createElement('div');
    novaDiv.innerHTML = `
    <div id="batata-frita">
    <div class="cart-food">
        <img class="imgBurgue-carrinho" src="fritas/fritas1.png" alt="">
        <div class="paragrafos-carrinho">
            <p class="nome">Batata Frita</p>
            <p class="gramas">500g</p>
        </div>
    </div>
    <div class="conteiner-sacola">
        <span id="preco">30,00R$</span>
        <div class="controlador">
            <button class="btn-menos"><img src="logos/operacoes-de-calculo-menos-sinal.png" alt=""></button>
            <input type="number" name="" id="number" value="0">
            <button class="btn-mais"><img src="logos/botao-de-simbolo-de-mais.png" alt=""></button>
        </div>
    </div>
  </div>`

  return sacola.appendChild(novaDiv);
};


const addCartBatatafrita2 = () => {
    const sacola = document.querySelector('#sacola');
    const novaDiv = document.createElement('div');
    novaDiv.innerHTML = `
    <div id="batata-frita">
    <div class="cart-food">
        <img class="imgBurgue-carrinho" src="fritas/fritas2.png" alt="">
        <div class="paragrafos-carrinho">
            <p class="nome">Batata Frita</p>
            <p class="gramas">500g</p>
        </div>
    </div>
    <div class="conteiner-sacola">
        <span id="preco">30,00R$</span>
        <div class="controlador">
            <button class="btn-menos"><img src="logos/operacoes-de-calculo-menos-sinal.png" alt=""></button>
            <input type="number" name="" id="number" value="0">
            <button class="btn-mais"><img src="logos/botao-de-simbolo-de-mais.png" alt=""></button>
        </div>
    </div>
  </div>`

  return sacola.appendChild(novaDiv);
}

}


