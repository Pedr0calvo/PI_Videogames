const { Op } = require("sequelize");
const { Videogame, Genre } = require("../db");

const createVideogame = async (
  id,
  name,
  description,
  released,
  rating,
  background_image,
  platforms,
  genders,
  createdinDB
) => {
  try {
    const videogameCreate = await Videogame.create({
      id,
      name,
      description,
      released,
      rating,
      background_image,
      platforms,
      createdinDB
    });
    const findGenres = await Genre.findAll({
      where: {
        name: {
          [Op.or]: genders,
        },
      },
    });
    videogameCreate.addGenre(findGenres);
  } catch (error) {
    console.error(error);
  }
};

module.exports = createVideogame;
