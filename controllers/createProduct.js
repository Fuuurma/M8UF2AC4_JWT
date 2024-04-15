// const mysql = require('mysql2');
const mysql = require('mysql2/promise');

const createProduct = (async (req, res) => {

    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DB,
    });

    // WITH CALLBACKS
    // connection.query('INSERT INTO product(name,price) VALUES(?,?)',
    //     [req.body.name, req.body.price],
    //     //calback declaration
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             // console.log(results);
    //             res.redirect("/list")
    //         }
    //     }
    // );

    // WITH PROMISE WRAPPER (tasca 5)
    // query = new Promise((resolved,rejected)=>{
    //     connection.query('INSERT INTO product(name,price) VALUES(?,?)',
    //     [req.body.name, req.body.price],
    //      function (err, results, fields) {
    //         if (err) {
    //             rejected(err)
    //         }
    //         else {
    //             // console.log(results);
    //             resolved(results, fields)
    //         }
    //     }
    // );
    // })

    // query
    // .then(()=>{
    //     res.redirect("/list");
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })

    // WITH PROMISE METHOD (tasca 6)
    // connection.promise().query('INSERT INTO product(name,price) VALUES(?,?)',
    //     [req.body.name, req.body.price])
    //     .then(() => {
    //         res.redirect("/list");
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })

    // WITH mysql2/promise library (tasca 7)
    try{
        connection.query('INSERT INTO product(name,price) VALUES(?,?)',
            [req.body.name, req.body.price])
            .then(() => {
                res.redirect("/list");
            })
            .catch((error) => {
                console.log(error);
            })
    }
    catch (error){
        console.log("ALGO V MAL")
    }
})

module.exports = createProduct