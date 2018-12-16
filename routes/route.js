
module.exports = app =>{
    const controll = require('../controller/control.js')
    app.get('/main', controll.start)
    app.get('/main/time', controll.time)

    app.use(function (err, req, res, next) {
        console.error(err.stack)
        res.status(404).send('Something broke!')
      })
}