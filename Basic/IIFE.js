(function connectDB() {
  console.log("DB Connected");
})();

((dbName) => {
  console.log("DB Two Connected", dbName);
})("MongoDB");
