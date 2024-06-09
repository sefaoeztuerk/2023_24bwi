const express = require('express')
const bodyParser = require('body-parser');
const db = require("./Db");

const app = express();

app.use(bodyParser.urlencoded({ extendet: false }));
app.use(bodyParser.json());


const data = [

    { name: "Maxe", age: 17 },
    { name: "Diego", age: 17 },
    { name: "Tamir", age: 17 },
];

app.get('/people', async function (req, res) {

    try {
        let result = await db.query("select * from people")
        res.send(result);
    } catch (error) {
        res.status(404).send(error.message)
    }

});

app.post('/people', (req, res) => {
    data.push(req.body);
    res.send(req.body);
});

app.listen(3001, function () {
    console.log('Server läuft auf port 3001');

})

