'user strict'

var mongoose=require('mongoose');

var app=require('./app');
var port=process.env.PORT || 3000;

mongoose.connect('mongodb+srv://SamCano99:PcpqkJas2031.@cluster0.le8rl.mongodb.net/MaraAC?retryWrites=true&w=majority',(err,res)=>{
    if(err){
        throw err
    }else{
        console.log('Conexion Exitosa');
        app.listen(port,function(){
            console.log('Servidor Corriendo en http://localhost:'+port);
        });
    }
})