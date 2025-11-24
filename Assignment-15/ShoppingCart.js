class Cart {
    constructor() {
        this.items = [];
        this.coupon = null;
    }
    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }
    applyCoupon(code) {
        const rule = /^(SAVE|DISC)\d+$/;
        if (rule.test(code)) this.coupon = parseInt(code.match(/\d+/)[0]);
    }
    getTotal() {
        let total = this.items.reduce((t, i) => t + i.price * i.qty, 0);
        if (this.coupon) total -= total * (this.coupon / 100);
        return total;
    }
}

const cart = new Cart();
cart.addItem("Shoes", 1500, 2);
cart.addItem("Bag", 800, 1);
cart.applyCoupon("SAVE20");
const finalAmount = cart.getTotal();