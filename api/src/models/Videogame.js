const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "videogame",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
      },
      platforms: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      background_image: {
        type: DataTypes.STRING,
      },
      released: {
        type: DataTypes.STRING,
      },
      createdinDB: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      genres: {
        type: DataTypes.VIRTUAL,
        get() {
          const genres = this.getDataValue("genders").map((el) => el.name);
          return genres;
        },
      },
    },
    { timestamps: false, createdAt: false, updatedAt: false }
  );
};
