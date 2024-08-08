import express from "express";
import cors from "cors";
// configures dotenv to work in your application
const app = express();
app.use(cors());
// app.use((req, res, next) => setTimout(next, 5000))

const PORT = 3000;

app.get("/user", (request, response) => {
  // response.setHeader("Access-Control-Allow-Origin", "*");
  setTimeout((() => {
    response.status(200).send({id:0, displayName:'Гость'});
  }), 5000)
  
});

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
