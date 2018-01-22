const orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(burgerName, isDevoured, cb) {
      orm.insertOne("burgers", burgerName, isDevoured, function(res) {
        cb(res);
      });
    },
    updateOne: function(burgerName, condition, cb) {
      orm.updateOne("burgers", burgerName, function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;