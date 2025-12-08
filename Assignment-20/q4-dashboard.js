const base = "http://localhost:3004"

const usersBox = document.getElementById("usersBox")
const ordersBox = document.getElementById("ordersBox")
const productsBox = document.getElementById("productsBox")
const warning = document.getElementById("warning")

const delay = ms => new Promise(res => setTimeout(res, ms))

function slowFetch(url) {
    return delay(1500).then(() => fetch(url))
}

const users = slowFetch(base + "/users")
const orders = slowFetch(base + "/orders")
const products = slowFetch(base + "/products")

Promise.all([users, orders, products])
    .then(responses => Promise.all(responses.map(r => r.ok ? r.json() : Promise.reject())))
    .then(data => {
        usersBox.textContent = data[0].length + " Users"
        ordersBox.textContent = data[1].length + " Orders"
        productsBox.textContent = data[2].length + " Products"
    })
    .catch(() => {
        warning.textContent = "Some data could not be loaded."
        usersBox.textContent = "—"
        ordersBox.textContent = "—"
        productsBox.textContent = "—"
    })