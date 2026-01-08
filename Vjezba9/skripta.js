var isActive = false;
var orderNum = 0;

document.querySelector("#shopping-card").addEventListener("click", () => {
    isActive = !isActive;

    if (isActive) {
        document.querySelector("#shopping-side-menu").setAttribute("class", "active");
    }
    else {
        document.querySelector("#shopping-side-menu").removeAttribute("class", "active");
    }

})

document.querySelector("#shopping-count").innerHTML = orderNum;


let pizzaBtns = document.querySelectorAll(".pizza-button")

pizzaBtns.forEach(botun => {
    botun.addEventListener("click", increaseOrders);
    botun.addEventListener("click", handleButtonClick);
});

function increaseOrders() {
    orderNum++;
    document.querySelector("#shopping-count").innerHTML = orderNum;
}

function handleButtonClick(e) {
    const odabranaPizza = e.currentTarget.parentElement;
    const pizzaIme = odabranaPizza.querySelector(".pizza-name").textContent;
    const pizzaCijena = odabranaPizza.querySelector(".pizza-price em").textContent;

    const pizza = { pizzaIme, pizzaCijena }
    createNewShopItem(pizza)
    calculateTotalPrice();
}

function createNewShopItem(pizza) {
    let pIme = pizza.pizzaIme
    let pCijena = pizza.pizzaCijena
    let jePronadena = false;

    const postojeciItemi = document.querySelectorAll(".shopping-item")
    postojeciItemi.forEach(item => {
        let itemIme = item.querySelector("h3").textContent;

        if (itemIme === pIme) {
            let kolicina = item.querySelector(".kolicina p").textContent;
            kolicina++;
            item.querySelector(".kolicina p").innerHTML = kolicina;
            jePronadena = true;
        };
    })

    if(jePronadena === false){
        document.querySelector("#shopping-side-menu").innerHTML += `
            <div class="shopping-item">
                <h3>${pIme}</h3>
                <div class="description">
                    <div class="cijena">
                        <small>Cijena:</small>
                        <p>${pCijena}</p>
                    </div>
                    <div class="kolicina">
                        <small>Količina:</small>
                        <p>1</p>
                    </div>
                </div>
            </div>
            `
    }
    

}

function calculateTotalPrice() {
    let ukCijena = 0;
    const cart = document.querySelectorAll(".shopping-item");
    cart.forEach(pizza => {
        let pizzaCijena = parseFloat(pizza.querySelector(".cijena p").innerHTML);
        let pizzaKolicina = pizza.querySelector(".kolicina p").innerHTML;
        let trCijena = pizzaCijena * pizzaKolicina;
        ukCijena += trCijena;
    })

    let finCijena = ukCijena.toFixed(2);
    let ukCijenaDisplay = document.querySelector("#shopping-side-menu em");
    ukCijenaDisplay.innerHTML = finCijena + " kn";
}