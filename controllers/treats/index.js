const Treats = require("../../models/treats")
const { Router } = require("express")
const router = Router()

//index route
router.get("/", async (req,res)=> {
    res.json(await Treats.find({}))
})





//EXPORT ROUTER
module.exports = router