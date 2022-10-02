var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("component", { title: "Express" });
});
router.get("/form", function (req, res, next) {
    res.render("form", { title: "Express" });
});

router.get("/test", function (req, res, next) {
    res.render("test", { title: "Express" });
});

module.exports = router;
