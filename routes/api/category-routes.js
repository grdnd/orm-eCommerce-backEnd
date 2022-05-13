// import express router
const router = require("express").Router();

const res = require("express/lib/response");
// import category/product models
const { Category, Product } = require("../../models");

// `/api/categories`
// GET all categories
router.get("/", (req, res) => {
  // find all categories
  Category.findAll({
    // be sure to include its associated Products
    include: [Product],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

// `/api/categories/:id
// GET category by id
router.get("/:id", (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id,
    },
    // be sure to include its associated Products
    include: [Product],
  })
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(err));
});

// `/api/categories/`
// POST new category
router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

// `/api/categories/:id`
// UPDATE category by id
router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.body.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

// `/api/categories/:id`
// DELETE category by id
router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
