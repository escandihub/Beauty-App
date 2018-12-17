const express = require('express')
const chalk = require('chalk')
const bodyParser = require('body-parser')
const con = require('./config/dataconfig.js')
const app = express()
const port = 4000

//database conneccion
con.connection.connect( function(err) { //database connection
    if(err) throw err
    console.log(chalk.yellow('Estamos conectados'))
})

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

require('./routes/route.js')(app)
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.send(err)
    next();
  })


app.listen(port, () => {
    console.log(chalk.green( `server is runnig in ${port}`))
})
