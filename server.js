// const express = require("express");
// const app = express();
const fs = require("fs");

// app.use(express.json());

fs.readdir(__dirname + "/assets/background/dark", (err, files) => {
  if (err) {
    console.error(err.message);
  } else {
    files.forEach((file) => {
      console.log(file);
    });
  }
});

// app.use("/", (req, res) => {
//   res.send("Hey");
// });

// app.listen(4000, () => {
//   console.log(`Server listening at http://localhost:4000`);
// });
