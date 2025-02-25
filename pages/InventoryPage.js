class InventoryPage {
    constructor(page) {
        this.page = page;
        this.itemCards = '.inventory_item';
        this.itemPrice = '.inventory_item_price';
        this.addButton = 'button';
    }

    async selectHighestPriceItem() {
        const items = await this.page.$$(this.itemCards);
        let highestPrice = 0;
        let highestPriceItem = null;

        for (const item of items) {
            const priceText = await item.$eval(this.itemPrice, el => el.innerText);
            const price = parseFloat(priceText.replace('$', ''));

            if (price > highestPrice) {
                highestPrice = price;
                highestPriceItem = item;
            }
        }

        if (highestPriceItem) {
            const addButton = await highestPriceItem.$(this.addButton);
            await addButton.click();
        }
    }
}

module.exports = InventoryPage;
