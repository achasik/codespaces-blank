import express from "express";
import cors from "cors";
// configures dotenv to work in your application
const app = express();
app.use(cors());

const PORT = 3000;

app.get("/user", (request, response) => {
  // response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).send("Hello World");
});

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
