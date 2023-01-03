fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1`).then(r => {
    return r.json()
}).then( dados => {
    for (i in dados.products) {

        document.getElementById('prod2').innerHTML += `
        <div id="mediaprod">
        <div>
        <img src=${dados.products[i].image}>
        </div>
        <div class="prodtexto">
        <h3>${dados.products[i].name}</h3>
        <p>${dados.products[i].description}</p>
        <p>De: R$${dados.products[i].oldPrice}</p>
        <span>Por: R$${dados.products[i].price}</span>
        <p>Ou ${dados.products[i].installments.count}x de R$${dados.products[i].installments.value}</p>
        <button>Comprar</button>
        </div>
        </div>`
    }
})