const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3007

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.all('/test', (req, res) => {
    console.log(req.body)
    res.send(req.body);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))