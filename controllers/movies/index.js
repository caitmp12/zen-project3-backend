const Movies = require("../../models/movies");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
  res.json(await Movies.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Movies.create(req.body));
});

//update route
router.put("/:_id", async (req, res) => {
  res.json(await Movies.findByIdAndUpdate(req.params._id, req.body));
});

//delete route
router.delete("/:_id", async (req, res) => {
  res.json(await Movies.findByIdAndRemove(req.params._id));
});
//EXPORT ROUTER
module.exports = router;
