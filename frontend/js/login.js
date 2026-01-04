document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("name", data.user.name);

    window.location.href = "dashboard.html";
  } catch (error) {
    alert("server is not connected");
  }
});
