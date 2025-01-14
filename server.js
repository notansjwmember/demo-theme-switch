const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/images", express.static("assets/background"));

app.get("/getImages/:theme", async (req, res) => {
  const { theme } = req.params;

  try {
    const files = fs.readdirSync(__dirname + `/assets/background/${theme}`);
    return res.status(200).json({ message: "Success", files: files });
  } catch (error) {
    return res.status(500).json({ message: "Could not complete request: ", error });
  }
});

app.listen(4000, () => {
  console.log(`Server listening at http://localhost:4000`);
});
