require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

const getVideogameId = async (idVideogame) => {
  try {
    const videogameApi = await axios.get(
      `https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`
    );
    const {
      id,
      name,
      background_image,
      description_raw,
      released,
      rating,
      platforms,
      genres,
    } = videogameApi.data;
    let game = [];
    game.push({
      id,
      name,
      background_image,
      description: description_raw,
      released,
      rating,
      platforms: platforms.map((e) => e.platform.name),
      genres: genres.map((e) => e.name),
    });
    return game
  } catch (error) {
    console.error(error);
  }
};

module.exports = getVideogameId;
