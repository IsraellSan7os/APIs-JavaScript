// Utilizando o fetch com then.
// fetch("http://localhost:3333/products")
// .then((response) => response.json())
// .then((date) => console.log(date))

async function fetchProducts() {
  const response = await fetch("http://localhost:3333/products");
  const date = await response.json();
  console.log(date);
}

fetchProducts()