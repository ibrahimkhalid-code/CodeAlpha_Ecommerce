const app = require("./app");

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
