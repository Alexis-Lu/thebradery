class Product {
  constructor(id, name, price, inventory) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.inventory = inventory;
  }

  decrementStock(quantity) {
    if (this.inventory >= quantity) {
      this.inventory -= quantity;
    } else {
      throw new Error("Stock insuffisant");
    }
  }

  incrementStock(quantity) {
    this.inventory += quantity;
  }
}

module.exports = Product;
