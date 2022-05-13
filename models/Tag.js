// import sequelize model datatypes
const { Model, DataTypes } = require("sequelize");

// import sequelize connection
const sequelize = require("../config/connection.js");

// create model class called tag
class Tag extends Model {}

// tag model structure
Tag.init(
  {
    // define columns //
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
