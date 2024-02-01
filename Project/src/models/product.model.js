import { products } from "../assets/products.js";

class ProductModel {
  static fetchProducts() {
    return products;
  }

  static addProduct(productObj) {
    const id = products.length + 1;
    const title = productObj.name;
    const description = productObj.desc;
    const price = productObj.price;
    const image = productObj.imageUrl;

    let newProduct = {
      id: id,
      title: title,
      description: description,
      price: price,
      image: image,
    };
    console.log(newProduct);
    products.push(newProduct);
  }
}

export default ProductModel;
