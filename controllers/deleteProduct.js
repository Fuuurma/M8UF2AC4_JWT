// const mysql = require('mysql2');
const mysql = require('mysql2/promise');

const deleteProduct = (async (req, res) => {

    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DB,
    });

    // console.log(req.body.name)

    connection.query('DELETE FROM product WHERE name = ?',
        [req.body.name])
        .then(() => {
            console.log(`Product ${req.body.name} deleted succesfully`)
            res.send(`Product ${req.body.name} deleted succesfully`);
        })
        .catch((error) => {
            console.log(error);
        })
})

module.exports = deleteProduct