const con = require('../config/dataconfig.js')

exports.start = (req, res) => {
    con.connection.query('SELECT * FROM cita', (err, results) =>{
        if(err) throw err 
        var data =  results
        res.send({data})
        
    })    
}

exports.new = (req, res) => {
    console.log(req.body)
    name = req.body.name 
    fecha = req.body.telefono
    con.connection.query('INSERT INTO cita(nombre, telefono) VALUES(?, ?)', [name, fecha], function(err, results){
        if(err) throw err
        res.send({
            'status': 'ok'
        })
    })
}