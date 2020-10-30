const Movies = require("../../models/movies");
const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");
//index route
baseURL = 'http://api.themoviedb.org/3/search/movie?api_key=fed5e089d23c6f1bdd716afb2295ff77&language=en-US&query='

//INDEX ROUTE FOR SEARCHING FOR MOVIES
router.get("/search/:page/:searchTerm", async (req, res) => {
    fetch(baseURL + req.params.searchTerm + `&page=${req.params.page}`)
    .then(response => response.json())
    .then(data => {
        res.json(data)
    })
});

//index route
router.get("/", async (req,res)=> {
    res.json(await Movies.find({}))
})

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
