const express = require('express')
const app = express()
const port = 4000


require('./routes/route.js')(app)


app.listen(port, () => {
    console.log(`server is runnig in ${port}`)
})
