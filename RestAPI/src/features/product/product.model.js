class ProductModel {
  constructor(id, name, desc, imageUrl, category, sizes, price) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.imageUrl = imageUrl;
    this.category = category;
    this.sizes = sizes;
    this.price = price;
  }

  static getAll() {
    return products;
  }

  static addProduct(newProdObj) {
    const newProd = { id: products.length + 1, ...newProdObj };
    products.push(newProd);
  }

  static getProdById(id) {
    const prodFound = products.find((p) => {
      if (p.id == id) return p;
    });

    return prodFound;
  }

  static filterProduct(minPrice, maxPrice, category) {
    const filteredProd = products.filter((p) => {
      if (
        p.price >= minPrice &&
        p.price <= maxPrice &&
        p.category == category
      ) {
        return p;
      }
    });

    return filteredProd;
  }
}

let products = [
  new ProductModel(
    1,
    "One Plus 12R",
    "A next gen phone by OnePlus",
    "https://m.media-amazon.com/images/I/717JX3femML._SL1500_.jpg",
    "Mobile",
    null,
    39000
  ),
  new ProductModel(
    2,
    "Kurti Set",
    "Nayasa Women Kurti Set",
    "https://m.media-amazon.com/images/I/51GQk+wFRcL._SL1300_.jpg",
    "Fashion",
    ["S", "M", "L"],
    499
  ),
];

export { ProductModel };
