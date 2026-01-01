const cart = JSON.parse(localStorage.getItem("cart")) || [];

function checkout() {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: localStorage.getItem("name"),
      cartItems: cart,
      totalPrice,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("✅ تم تأكيد الطلب");
      localStorage.removeItem("cart");
      window.location.href = "dashboard.html";
    })
    .catch(() => alert("❌ حدث خطأ"));
}
