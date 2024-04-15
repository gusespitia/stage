import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());

app.get("/data", (req, res) => {
  return res.json({
    someSecretData: "shhh!!!",
  });
});
app.listen(3010, () => console.log("App listening on port 3010"));

