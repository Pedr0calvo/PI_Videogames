require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Gender } = require("../db");
const axios = require("axios");

const getVideoGamesApi = async () => {
  try {
    let results = [];
    let videogames = [];
    let pages = [1, 2, 3, 4, 5];
    pages.forEach((page) => {
      videogames.push(
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`)
      );
    });
    await Promise.all(videogames).then((response) => {
      response.forEach((e) => {
        let respuesta = e.data;
        results.push(
          ...respuesta.results.map((e) => ({
            id: e.id,
            name: e.name,
            rating: e.rating,
            background_image: e.background_image,
            released: e.released,
            genres: e.genres.map((e) => e.name),
            platforms: e.platforms.map((e) => e.platform.name),
          }))
        );
      });
    });
    return results;
  } catch (error) {
    console.error(error);
  }
};

const getVideoGamesDb = async () => {
  try {
    const getVideosDb = await Videogame.findAll({
      include: [
        {
          model: Gender,
          through: {
            attributes: [],
          },
        },
      ],
    });
    return getVideosDb;
  } catch (error) {
    console.error(error);
  }
};

const getVideoGames = async () => {
  try {
    const apiInfo = await getVideoGamesApi();
    const dbInfo = await getVideoGamesDb();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
  } catch (error) {
    console.error(error);
  }
};



module.exports = getVideoGames;
