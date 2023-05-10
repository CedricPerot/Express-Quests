require("dotenv").config();

const express = require("express");

const app = express();


const port = process.env.APP_PORT ?? 5000;

const movieHandlers = require("./movieHandlers");

const welcome = (req, res) => {
  res.send("Welcome to my favourite lists");
};

app.use(express.json());
app.get("/", welcome);

app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);

app.get("/api/users", movieHandlers.getUsers);
app.get("/api/users/:id", movieHandlers.getUserById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

app.post("/api/movies", movieHandlers.postMovie);
app.post("/api/users", movieHandlers.postUser); //challenge quete express 03
