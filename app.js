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
    data.forEach((productData) => {
      const product = new Product(
        productData.title,
        productData.price,
        productData.description,
        productData.image
      );
      products.push(product);
    });

    renderProducts();
  })
  .catch((error) => console.error(error));
// function renderProducts() {
//   const main = document.querySelector("main");
//   main.innerHTML = products
//     .map((product) => {
//       return `
//       <div class="product-card">
//         <img src="${product.image}" alt="image">
//         <h2>${product.title}</h2>
//         <p>${product.description}</p>
//         <p>${product.price}</p>
//       </div>
//     `;
//     })
//     .join("");
// }

function renderProducts() {
  const main = document.querySelector("main");
  const productCards = products.map(
    (product) => `
      <div class="product-card">
        <img src="${product.image}" alt="image">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p class="price">$${product.price}</p>
      </div>
    `
  );
  main.innerHTML = productCards.join("");
}
