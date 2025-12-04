const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./db");

const enterpriseRoutes = require("./routes/enterprise");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/enterprises", enterpriseRoutes);


sequelize.authenticate()
  .then(() => console.log("✔ Connected to MySQL database"))
  .catch(err => console.error(" Unable to connect to MySQL:", err));

sequelize.sync({ alter: true })
  .then(() => console.log("✔ Database synced"))
  .catch(err => console.error(" Sync error:", err));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
