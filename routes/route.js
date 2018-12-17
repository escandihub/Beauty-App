
module.exports = app => {
    const controll = require('../controller/control.js')
    app.get('/main', controll.start)
    app.post('/main/new', controll.new)


    app.use(function (err, req, res, next) {
        console.error(err.stack)
        res.status(500).send('Something broke!')
      })
}