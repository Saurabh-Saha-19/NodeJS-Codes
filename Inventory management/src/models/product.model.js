class ProductModel {
  constructor(id, name, desc, price, imageUrl) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  static get() {
    return products;
  }

  static add(name, desc, price, imageUrl) {
    let newProduct = new ProductModel(
      products.length + 1,
      name,
      desc,
      price,
      imageUrl
    );
    products.push(newProduct);
  }

  static getById(id) {
    return products.find((p) => p.id == id);
  }

  static update(productObj) {
    const index = products.findIndex((p) => p.id == productObj.id);
    products[index] = productObj;
  }

  static delete(id) {
    const index = products.findIndex((p) => p.id === id);
    products.splice(index, 1);
  }
}

var products = [
  new ProductModel(
    1,
    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    109.95,
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  ),

  new ProductModel(
    2,
    "Mens Casual Premium Slim Fit T-Shirts ",
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    22.3,
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  ),

  new ProductModel(
    3,
    "Mens Cotton Jacket",
    "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    55.99,
    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  ),
];

export default ProductModel;
