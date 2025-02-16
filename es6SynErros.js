const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    if (!item || typeof item.price !== 'number' || isNaN(item.price)) {
      console.log("Invalid price.");
      return;
    }

    this.items.push(item);
    this.total += item.price;
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};

// Fix: Convert price to number before adding
checkout.addItem({ name: "Coffee Maker", price: parseFloat("99.95") });
checkout.addItem({ name: "Milk", price: 3.50 });

console.log(checkout.getTotal());
