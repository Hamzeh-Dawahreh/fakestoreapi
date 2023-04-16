class Product {
  constructor(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}

const products = [];

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 20; i++) {
      const productData = data[i];
      const product = new Product(
        productData.title,
        productData.price,
        productData.description,
        productData.image
      );
      products.push(product);
    }
    renderProducts();
  })
  .catch((error) => console.error(error));
function renderProducts() {
  const main = document.querySelector("main");
  main.innerHTML = products
    .map((product) => {
      return `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p>${product.price}</p>
      </div>
    `;
    })
    .join("");
}
