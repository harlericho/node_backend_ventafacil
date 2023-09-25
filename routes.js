const router = require("express").Router();
const db = require("./db");
//const uuid = require("uuid");
const uuid = require("uuid");
//uuid.v4();
const now = new Date();
// Generate UUID for date and time
// const id = uuid.v1({
//   node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
//   clockseq: 0x1234,
//   msecs: now.getTime(),
//   nsecs: now.getMilliseconds(),
// });

// categories
// router -- categories data all
router.get("/api/categories", (req, res) => {
  const sql = "SELECT * FROM categories";
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Categories not found" });
    }
  });
});
// router -- categories save data
router.post("/api/categories", (req, res) => {
  const sql = "INSERT INTO categories SET ?";
  const categoryObject = {
    id: req.body.id,
    name: req.body.name,
  };
  console.log(categoryObject);
  db.query(sql, categoryObject, (err, result) => {
    if (err) throw err;
    res.status(201).json({ message: "Category created" });
  });
});

// produdcts
// router -- products data all
router.get("/api/products", (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  });
});
// router -- products data by code
router.get("/api/products/:id", (req, res) => {
  const sql = "SELECT * FROM products WHERE code = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  });
});
// router -- products save data
router.post("/api/products", (req, res) => {
  const id = uuid.v4();
  const sql = "INSERT INTO products SET ?";
  const productObject = {
    id: id,
    reference: req.body.reference,
    code: req.body.code,
    name: req.body.name,
    pricebuy: req.body.pricebuy,
    pricesell: req.body.pricesell,
    category: req.body.category,
    taxcat: req.body.taxcat,
  };
  console.log(productObject);
  db.query(sql, productObject, (err, result) => {
    if (err) throw err;
    res.status(201).json({ message: "Product created" });
  });
  const sql1 = "INSERT INTO products_cat SET ?";
  const productCatObject = {
    product: id,
  };
  db.query(sql1, productCatObject, (err, result) => {
    if (err) throw err;
    //res.status(201).json({ message: "Product cat created" });
  });
});

// people
// router -- people data all
router.get("/api/people", (req, res) => {
  const sql = "SELECT * FROM people";
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "People not found" });
    }
  });
});

// roles
// router -- roles data all
router.get("/api/roles", (req, res) => {
  const sql = "SELECT * FROM roles";
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Roles not found" });
    }
  });
});

module.exports = router;
