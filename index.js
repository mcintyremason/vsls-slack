import express from "express";
// import * as vsls from "vsls";
const app = express();
const PORT = 3000;

// respond with "hello world" when a GET request is made to the homepage
(async () => {
  // const liveshare = await vsls.getApi();
  // console.log(liveshare);

  app.post("/codepair", function (req, res) {
    res.send("hello world");
  });

  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
})();
