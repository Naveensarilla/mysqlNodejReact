const expreess = require('express');

const mysql = require('mysql');

const cors = require('cors');

const app = expreess()
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'naveen',
    password: 'naveen',
    database: 'StudentList'
})




app.get('/', (re,res) => {
    return res.json('From Backend Side ');
})

app.get('/data', (req, res) => {
    const sql = "SELECT * FROM data";
    // const sql = "SELECT * FROM data where  RegisterNo=1245";

    // const sql = 'select * from data';
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.listen(8081, ()=> {
    console.log('Listening');
})


// app.get('/data', (req, res) => {
//     // const sql = "SELECT * FROM data where RegisterNo=1245;";
//     const sql = "SELECT * FROM data where  RegisterNo=15245";

//     // const sql = 'select * from data';
//     db.query(sql, (err, data) => {
//         if(err) return res.json(err);
//         return res.json(data);
//     })
// })
// app.listen(8081, ()=> {
//     console.log('Listening');
// })

// sending------------------------------------------------
// const dbs = mysql.createConnection({
//     host: 'localhost',
//     user: 'naveen',
//     password: 'naveen',
//     database: 'Login'
// })

// app.post('/login', (reqq,ress) =>{
//     const sql = 'INSERT INTO login (`name`,`email`,`password`) Values (?)';
//     const Values =[
//         reqq.body.name,
//         reqq.body.email,
//         reqq.body.password,
//     ]
// })
// dbs.query(sql, [values],(errr,dataLogin) => {
//     if(errr) return ress.json(errr);
//     return ress.json(dataLogin);
// })



