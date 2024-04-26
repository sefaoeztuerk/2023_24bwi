const express = require('express')
const app = express()

const data = [

    { name: "Maxe", age: 17 },
    { name: "Diego", age: 17 },
    { name: "Tamir", age: 17 },
]



app.get('/people', function (req, res) {
    res.send(data)
})

app.put('/people', function (req, res) {
    console.log(req, body)
})

app.listen(3001, function () {
    console.log('Server läuft auf port 3001');

})

