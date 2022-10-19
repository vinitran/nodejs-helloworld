// const express = require('express');
// const mysql = require("mysql");
// const generateAccessToken = require("./generateAccessToken")

// var app = express();
// var bodyParser = require('body-parser');

// const bcrypt = require("bcrypt");

// const db = mysql.createPool({
//     connectionLimit: 100,
//     host: "127.0.0.1",
//     user: "root",         // "newuser" created in Step 1(e)
//     database: "user",      // Database name
//     port: "3306"           // port name, "3306" by default
// });

// db.getConnection((err, connection) => {
//     if (err) throw (err)
//     console.log("DB connected successful: " + connection.threadId)
// })

// app.use(express.json())

// app.post('/register', async (req, res, next) => {
//     var username = req.body.username;
//     var hashedPassword = await bcrypt.hash(req.body.password, 10);

//     db.getConnection(async (err, connection) => {
//         if (err) throw (err);

//         const sqlSearch = "SELECT * FROM accounts WHERE username = ?";
//         const search_query = mysql.format(sqlSearch, [username]);

//         const sqlInsert = "INSERT INTO accounts VALUES (0,?,?)";
//         const insert_query = mysql.format(sqlInsert, [username, hashedPassword]);

//         await connection.query(search_query, async (err, result) => {
//             if (err) throw (err);
//             console.log(result.length)

//             if (result.length > 0) {
//                 connection.release();
//                 res.sendStatus(409)
//             }

//             else {
//                 await connection.query(insert_query, async (err, result) => {
//                     connection.release();
//                     if (err) throw (err);
//                     console.log(result.insertId);
//                     res.sendStatus(201);
//                 })
//             }
//         })
//     })
// })

// app.post("/login", async (req, res) => {
//     const user = req.body.username;
//     const password = req.body.password;

//     db.getConnection(async (err, connection) => {
//         if (err) throw (err);
//         const sqlSearch = "SELECT * FROM accounts WHERE username = ?";
//         const search_query = mysql.format(sqlSearch, [user]);

//         await connection.query(search_query, async (err, result) => {
//             connection.release();
//             if (err) throw (err);
//             if (result.length == 0) {
//                 console.log("User does not exist");
//                 res.sendStatus(404);
//             }
//             else {
//                 const hashedPassword = result[0].password;
//                 if (await bcrypt.compare(password, hashedPassword)) {
//                     console.log("Login successful");
//                     res.send(`${user} is logged in!`);
//                     const token = await generateAccessToken({user: user});
//                     res.json({accessToken: token});
//                 }
//                 else {
//                     console.log("Password incorrect");
//                     res.send("Password incorrect");
//                 }
//             }
//         })
//     })
// })

// app.get('/', (req, res, next) => {
//     res.json("HOME");
// })

// app.listen(3001, () => {
//     console.log("Server started on port");
// })