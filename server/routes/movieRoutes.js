const router = require("express").Router();
const movieController = require("../controllers/movieController.js");

router.post("/search", movieController.getSearch);

router.get("/genres", movieController.getGenres);

router.get("/host", movieController.getFavorites);

router.post("/host", movieController.saveMovie);

router.put("/host", movieController.deleteMovie);

module.exports = router;
