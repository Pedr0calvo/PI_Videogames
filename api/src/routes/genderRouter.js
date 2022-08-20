const { Router } = require("express");
const genderRouter = Router();
const moveGenders = require("../controllers/genderController");

genderRouter.get("/", async (req, res) => {
  try {
    const allGenders = await moveGenders();
    res.send(allGenders);
  } catch (error) {
    console.error(error);
  }
});

module.exports = genderRouter;