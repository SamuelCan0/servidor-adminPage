'use strict'

const mongoose=require("mongoose");
var Schema=mongoose.Schema;

var ProjectSchema=Schema({
    image:String,
    titulo:String,
    descrip:String,
    fecha:Date
});

module.exports=mongoose.model('Project',ProjectSchema);