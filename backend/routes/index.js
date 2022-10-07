const express = require("express");
const router = express.Router();

// // testing route only
// router.get('/hello/world', function(req, res) {
  //   res.cookie('XSRF-TOKEN', req.csrfToken());
  //   res.send('Hello World!');
  // });

  router.get("/api/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
      "XSRF-TOKEN": csrfToken,
    });
  });

  const apiRouter = require("./api");

  router.use("/api", apiRouter);
  
module.exports = router;
