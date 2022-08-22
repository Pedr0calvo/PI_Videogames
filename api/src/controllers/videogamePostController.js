const { Op } = require("sequelize");
const { Videogame, Gender } = require("../db");

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
    const findGenres = await Gender.findAll({
      where: {
        name: {
          [Op.or]: genders,
        },
      },
    });
    videogameCreate.addGender(findGenres);
  } catch (error) {
    console.error(error);
  }
};

module.exports = createVideogame;
