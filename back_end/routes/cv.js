var express = require("express");
var router = express.Router();

/* cv home page. */
router.get("/cv", function(req, res, next) {
  res.json({ title: "my site" });
});

module.exports = router;
