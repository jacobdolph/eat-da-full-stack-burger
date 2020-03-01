const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (result) {
        res.render("index", {
            burgers: result,
        });
    })
});
router.get("/api/burgers", function (req, res) {

    burger.all(function (result) {
        res.json(result);
    })
})
router.post("/api/burgers", function (req, res) {

    burger.create("name", req.body.name, function (result) {
        res.json({ id: result.insertId });
    })
})
router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;
    burger.update({
        devoured: true,
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
module.exports = router;