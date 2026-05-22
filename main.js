fetch("http://localhost:3333/products")
.then((response) => response.json())
.then((date) => console.log(date))
