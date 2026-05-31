// Utilizando o fetch com then.
// fetch("http://localhost:3333/products")
// .then((response) => response.json())
// .then((date) => console.log(date))

async function fetchProducts() {
  const response = await fetch("http://localhost:3333/products");
  const data = await response.json();
  console.log(data);
}

//fetchProducts()

async function fetchProductById(id) {
  const response = await fetch(`http://localhost:3333/products/${id}`);
  const data = await response.json();
  console.log(data);
}

// fetchProductById(1);
// fetchProductById(2);
// fetchProductById(3);

async function fetchUser(id) {
  const response = await fetch(`http://localhost:3333/products/${id}`);
  const data = await response.json();
  console.log(data);
}
// fetchUser(1);
// fetchUser(2);
// fetchUser(3);

const ProductName = document.getElementById("name");
const ProductPrice = document.getElementById("price");
const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  await fetch("http://localhost:3333/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: new Date().getTime().toString(),
      name: ProductName.value,
      price: ProductPrice.value,
    }),
  });

  await fetchProducts();
});
