require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Gender } = require("../db");
const axios = require("axios");

const getGenders = async () => {
  try {
    const getGenders = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    const getGendersResults = (a) => a.results;
    const mapGenders = getGendersResults(getGenders.data).map((e) => {
      return {
        id: e.id,
        name: e.name,
      };
    });
    return mapGenders;
  } catch (error) {
    console.error(error);
  }
};

const moveGenders = async () => {
  try {
    const getGender = await getGenders();
    const createGender = getGender.map((el) => {
      const { name } = el;
      Gender.findOrCreate({
        where: {
          name: name,
        },
      });
    });
    const theGenders = await Gender.findAll();
    return theGenders;
  } catch (error) {
    console.error(error);
  }
};

module.exports = moveGenders;
