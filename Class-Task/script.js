function calculateBill() {
    let price = parseFloat(document.getElementById("price").value);
    let qty = parseInt(document.getElementById("qty").value);

    let original = document.getElementById("original");
    let final = document.getElementById("final");

    original.innerHTML = "";
    final.innerHTML = "";

    if (isNaN(price) || isNaN(qty)) {
        final.innerText = "INVALID NUMBERS";
        return;
    }

    let total = price * qty;

    if (total > 1000) {
        let discounted = total - total * 0.10;
        

original.innerHTML = `<span style="text-decoration: line-through;">\u20B9${total.toFixed(2)}`;

        final.innerHTML = `<span style="color: red;">Final Amount: \u20B9${discounted.toFixed(2)}<span>`;

        return;
    }
    final.innerHTML = `Final Amount: ₹${total.toFixed(2)}`;
}
