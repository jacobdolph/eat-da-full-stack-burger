const orm = require("../config/orm");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        })
    },

    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (devour, condition, cb) {
        orm.update("burgers", devour, condition, function (res) {
            cb(res);
        })
    }
}

module.exports = burger;