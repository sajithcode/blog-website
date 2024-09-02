const express = require('express');
const cors = require('cors');

const app = express();
const mysql = require('mysql');

app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog'
});

db.connect((err) => {
    if(err){
        console.error("Error Connecting to database");
    } else {
        console.log("Connected to MySQL database");
    }
});

app.get('/getPost', function (req, res) {
    const sql = "SELECT * FROM post";
    db.query(sql, function (err, data){
        if(err) return res.json("Error");
        return res.json(data);
        
    })
}
)

app.post('/createPost', (req, res) => {
    const sql = "INSERT INTO post (Title, Content) VALUES (?, ?)";

    const values = [
        req.body.title,
        req.body.content
    ]

    db.query(sql, [...values], (err, data) => {
        if (err) return res.json("Error")
        return res.json(data);
});
})

app.put('/updatePost/:id', (req, res) => {
    const sql = "UPDATE post SET Title =?, Content =? WHERE ID =?";
    const values = [
        req.body.title,
        req.body.content,
    ]

    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) return res.json("Error")
        return res.json(data);
    });
})

app.delete('/post/:id', (req, res) => {
    const sql = "DELETE FROM post WHERE ID =?";
    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if (err) return res.json("Error")
        return res.json(data);
    });
})



app.listen(8081, function(req, res) {
    console.log('Listening on Port 8081');
});