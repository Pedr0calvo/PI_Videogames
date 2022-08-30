const { Router } = require("express");
const videosgamesRouter = Router();
const getVideoGames = require("../controllers/videogamesController");
const getVideogameId = require("../controllers/videogamesIdController");
const createVideogame = require("../controllers/videogamePostController");

videosgamesRouter.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const getAllVideogames = await getVideoGames();
    if (name) {
      const nameVideosG = getAllVideogames.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      if (nameVideosG.length) res.send(nameVideosG);
      else res.status(404).send("Videogame does not exist");
    } else res.send(getAllVideogames);
  } catch (error) {
    res.status(404).send(error);
  }
});

videosgamesRouter.get("/:idVideogame", async (req, res) => {
  try {
    const { idVideogame } = req.params;
    const getAllVideogames = await getVideoGames();
    if (idVideogame.includes("-")) {
      const videogameById = getAllVideogames.filter(
        (e) => e.id === idVideogame
      );
      videogameById.length
        ? res.send(videogameById)
        : res.status(404).send("Videogame does not exist");
    } else {
      const gamesDb = await getVideogameId(idVideogame);
      res.send(gamesDb);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

videosgamesRouter.post("/", async (req, res) => {
  try {
    const {
      id,
      name,
      description,
      released,
      rating,
      background_image,
      platforms,
      genders,
      createdinDB,
    } = req.body;
    const postVideogame = await createVideogame(
      id,
      name,
      description,
      released,
      rating,
      background_image,
      platforms,
      genders,
      createdinDB
    );
    res.send("Videogame created succesfully");
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = videosgamesRouter;
