const Drinks = require("../../models/drinks")
const { Router } = require("express")
const router = Router()

//index route
router.get("/", async (req,res)=> {
    res.json(await Drinks.find({}))
})





//EXPORT ROUTER
module.exports = router