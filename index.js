import db from "./db/db.js";
import router from "./routes/index.js";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
  try {
    await db.sync();
  } catch (error) {
    console.log(error);
  }
})();

app.use("/", router);
app.listen(3000, () => console.log("Server started on port 3000"));
