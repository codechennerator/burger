let connection = require('../config/connection.js');

let orm = {
    selectAll: (tableInput, cb) =>{
        let queryString = "SELECT * FROM ??";
        connection.query(queryString,[tableInput], (err, result) =>{
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: (tableInput, burgerName, isEaten, cb) =>{
        let post = {burger_name: burgerName, devoured: isEaten};
        let queryString = "INSERT INTO ?? SET ?";
        connection.query(
            queryString,
            [tableInput, post],
            (err, result) =>{
                if(err) throw err;
                console.log(result);
                cb(result);
            }
        );
    },
    updateOne: (tableInput, burgerName, cb) =>{
        let toUpdate = {devoured: true};
        let condition = {burger_name: burgerName};
        let queryString = "UPDATE ?? SET ? WHERE ?"
        connection.query(
            queryString,
            [tableInput, toUpdate, condition],
            (err, result) => {
                if(err) throw err;
                console.log(result);
                cb(result);
            }
        );
    }
}

module.exports = orm;
// connection.query("SELECT * FROM burgers", (err,result) => {
//     if (err) throw err;
//     console.log(result);
// });