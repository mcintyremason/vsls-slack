import express from "express";
// import * as vsls from "vsls";
const app = express();
const PORT = 3000;

// respond with "hello world" when a GET request is made to the homepage
(async () => {
  app.post("/", async (req, res) => {
    // const liveshare = await vsls.getApi();
    // console.log(liveshare);
    console.dir(req, { debug: null, colors: true });
    res.status(200).send("HELLO");
  });

  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
})();
