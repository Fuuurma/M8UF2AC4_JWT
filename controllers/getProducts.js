// const mysql = require('mysql2');
const mysql = require('mysql2/promise');


const getProducts = (async (req, res) => {
    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DB,
    });

    // SIN CALLBACK
    // results = connection.query('SELECT * FROM `product` ORDER BY id DESC') // no retorna nada
    // res.render("list", { products: results })

    // CON CALLBACK
    // connection.query('SELECT * FROM `product` ORDER BY id DESC',
    //     //calback declaration
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             // console.log(results);
    //             res.render("list", { products: results })
    //         }
    //     }
    // );

    // CON PROMESA (WRAPPER)
    // query = new Promise((resolved, rejected) => {
    //     connection.query('SELECT * FROM `product` ORDER BY id DESC',
    //         function (err, results, fields) {
    //             if (err) {
    //                 rejected(err)
    //             }
    //             else {
    //                 resolved(results, fields)
    //             }
    //         })
    // })
    // query
    //     .then((results, fields) => {
    //         // console.log(results)
    //         res.render("list", { products: results })
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // query es un objeto promesa que se puede pasar a otra función

    // CON MÉTODO PROMESA DEL MÉTODO
    // connection.promise().query('SELECT * FROM `product` ORDER BY id DESC')
    //     .then((results, fields) => {
    //         // console.log(results)
    //         res.render("list", { products: results[0] })
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })

    // CON MÓDULO mysql2/promise
    // Cambiar require
    // await on createConnection (ahora retorna promesa)

    connection.query('SELECT * FROM `product` ORDER BY id DESC')
        .then((results, fields) => {
            // console.log(results)
            // res.render("list", { products: results[0], user: req.session.username })
            res.render("list", { products: results[0] })
        })
        .catch((err) => {
            console.log(err)
        })

    // CON MÓDULO mysql2/promise
    // await on query
    // [results,fields] = await connection.query('SELECT * FROM `product`')

    // res.render("list", { products: results })

    // CON MÓDULO mysql2/promise
    // await on query + captura de errores
    // try {
    //     [results, fields] = await connection.query('SELECT * FROM `product`')
    //     res.render("list", { products: results })
    // }
    // catch (error) {
    //     console.log(error)
    //     res.status(500).send(
    //         "<style>h2{padding:5%;color:red}</style> \
    //         <h2>OOOPS! SOMETHING VERY BAD HAPPENED...<h2>"
    //     )
    // }

    // CON MÓDULO mysql2
    // await on Promise (wrapper)

    // results = await new Promise((resolved, rejected) => {
    //     connection.query('SELECT * FROM `product`',
    //         function (err, results, fields) {
    //             if (err) {
    //                 rejected(err)
    //             }
    //             else {
    //                 resolved(results)
    //             }
    //         })
    // })

    // res.render("list", { products: results })

    // EN TODAS LAS OPCIONES FALTA CERRAR CONEXIÓN
    // TBD: UTILIZAR POOL DE CONEXIONES
})

module.exports = getProducts