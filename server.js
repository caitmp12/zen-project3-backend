///////////////////////////
// Environmental Variables
///////////////////////////
// REMEMBER TO CREATE .env file
require("dotenv").config();
const { PORT = 4500, SECRET,  NODE_ENV = "development" } = process.env;

///////////////////////////
// Dependencies
//////////////////////////

// Bringing in Express
const express = require("express");
const app = express();

// IMPORT DATABASE CONNECTIONS
const mongoose = require("./db/dbconn");

//CORS
const cors = require("cors")
const corsOptions = require("./config/cors.js")
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());


// ROUTERS
const authRouter = require("./controllers/auth");
const testRouter = require("./controllers/test");
const treatsRouter = require("./controllers/treats")

// OTHER IMPORTS
// const session = require("express-session");
// const MongoStore = require("connect-mongo")(session);
// const methodOverride = require("method-override");
const morgan = require("morgan");

///////////////////////////////
// Set View Engine
///////////////////////////////

//set view engine to express-react-views
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

////////////
//MIDDLEWARE
////////////
// SESSIONS, this allows you to use req.session for tracking session data
// app.use(
//   session({
//     secret: SECRET,
//     saveUninitialized: false, // don't create session until something stored
//     resave: false, //don't save session if unmodified
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   })
// );
app.use(cors())
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); 
// app.use(methodOverride("_method"));
app.use(express.json()) 
// app.use(morgan("tiny")); //logging

///////////////
//Routes and Routers
//////////////
app.get("/", (req, res) => {
  res.render("index.jsx", { hello: "Hello World" });
});

app.use("/auth", authRouter);
app.use("/test", testRouter);
app.use("/treats", treatsRouter);

////////////////////////
//APP LISTENER
////////////////////////
app.listen(PORT, () => {
  console.log(`It's working y'all! Party on ${PORT}`);
});



//Stevens Test. Hey Josh and Ida
