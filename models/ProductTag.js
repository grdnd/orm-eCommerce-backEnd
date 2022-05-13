// import sequelize model datatypes
const { Model, DataTypes } = require("sequelize");

// import sequelize connection
const sequelize = require("../config/connection");

// create model class called product tag
class ProductTag extends Model {}

// product tag model structure
ProductTag.init(
  {
    // define columns //
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
