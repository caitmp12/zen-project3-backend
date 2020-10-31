const Drinks = require("../../models/drinks")
const { Router } = require("express")
const router = Router()

//index route
router.get("/", async (req,res)=> {
    res.json(await Drinks.find({}))
})

//create route
router.post("/", async (req, res) => {
    res.json(await Drinks.create(req.body));
  });

//update route
router.put("/:_id", async (req, res) => {
    res.json(await Drinks.findByIdAndUpdate(req.params._id, req.body));
  });

//delete route
router.delete("/:_id", async (req, res) => {
    res.json(await Drinks.findByIdAndRemove(req.params._id));
  });
//EXPORT ROUTER
module.exports = router