// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// products will belong under categories
// use .belongsTo()
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});

// categories can contain many products
// use .hasMany()
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// products can contain multiple tags
// use .belongsToMany()
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});

// tags can belong to multiple products
// use .belongsToMany()
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
