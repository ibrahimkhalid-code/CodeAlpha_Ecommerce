// المكان اللي عايز تعرض فيه المنتجات
const container = document.querySelector("#products-container");

// جلب المنتجات من الـ Backend
fetch("http://localhost:5000/api/products")
  .then((res) => res.json())
  .then((products) => {
    // عرض المنتجات في الصفحة
    container.innerHTML = products
      .map(
        (p) => `
      <div class="product">
        <img src="${p.image}" alt="${p.title}" />
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <p>Price: $${p.price}</p>
        <button onclick="addToCart('${p._id}', '${p.title}', ${p.price})">Add to Cart</button>
      </div>
    `
      )
      .join("");
  })
  .catch((err) => console.error("Error fetching products:", err));
