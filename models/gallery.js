'use strict'

const mongoose=require("mongoose");
var Schema=mongoose.Schema;

var GallerySchema=Schema({
    titulo: String,
    descrip: String,
    imagen: String,
    likes: Number,
    fecha: Date
});

module.exports=mongoose.model('Gallery',GallerySchema);