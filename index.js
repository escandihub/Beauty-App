const express = require('express')
const chalk = require('chalk')
const bodyParser = require('body-parser')
const cors = require('cors')
const con = require('./config/dataconfig.js')
const app = express()
const port = 4000

//database conneccion
con.connection.connect( function(err) { //database connection
    if(err) throw err
    console.log(chalk.yellow('Estamos conectados'))
})
//middelware
app.use(bodyParser.urlencoded({ extended: true}))
///app.use(cors())
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

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
