const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 9000;
app.set("port", port);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes"));

app.listen(port, () => {
  console.log("Server running on http://localhost:" + app.get("port"));
});
