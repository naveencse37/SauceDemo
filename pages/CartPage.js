class CartPage {
    constructor(page) {
        this.page = page;
        this.cartBadge = '.shopping_cart_badge';
    }

    async verifyCartNotEmpty() {
        await this.page.waitForSelector(this.cartBadge);
    }
}

module.exports = CartPage;
