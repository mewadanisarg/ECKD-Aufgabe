const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


// database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usermanagement',
    port: 3306,
})

//check database connection
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// save the person in the database
app.post('/user', (req, res) => {
    let title = req.body.title;
    let vorname = req.body.vorname;
    let nachname = req.body.nachname;

    let qr = `insert into user (title,vorname,nachname) values ('${title}','${vorname}','${nachname}')`;
    db.query(qr, (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.send({
                message: 'user inserted', 
                data: result
            });
        } else {
            res.send({
                message: 'user not inserted',
            });
        }
    });
    console.log("insert user!");
});


app.listen(7000, () => {
    console.log('Server running on port 7000');
});