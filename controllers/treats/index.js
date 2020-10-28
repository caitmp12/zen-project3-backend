const Treats = require("../../models/treats");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
  res.json(await Treats.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Treats.create(req.body));
});

//update route
router.put("/:_id", async (req, res) => {
  res.json(await Treats.findByIdAndUpdate(req.params._id, req.body));
});

//delete route
router.delete("/:_id", async (req, res) => {
  res.json(await Treats.findByIdAndRemove(req.params._id));
});

//EXPORT ROUTER
module.exports = router;
