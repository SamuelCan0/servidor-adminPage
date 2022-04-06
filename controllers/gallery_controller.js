'use strict'
var Gallery=require('../models/gallery');

function getGallerys(req,res){
    Gallery.find(
        function(err,gallerys){
            if(err){
                res.status(500).send({mensaje:'Error al Obtener Datos'});
            }else{
                res.json(gallerys);
            }
        }
    ).sort({"fecha":-1});
}

function updateGallery(req,res){
    var idGallery=req.params.id;
    var galleryActual=req.body;
    Gallery.findByIdAndUpdate(idGallery,galleryActual,(err,galleryModifi)=>{
        if (err) {
            res.send(500).send({mensaje:'Error en el servidor'});
        } else {
            if(!galleryModifi){
                res.status(404).send({mensaje:"No se logro Actualizar"});
            }else{
                res.status(200).send({Gallery:galleryModifi});
            }
        }
    });
}

function deleteGallery(req,res){
    var idGallery=req.params.id;
    Gallery.findByIdAndRemove(idGallery,(err,galleryElim)=>{
        if (err) {
            res.send(500).send({mensaje:'Error en el servidor'});
        } else {
            if (!galleryElim) {
                res.status(404).send({mensaje:"No se logro Eliminar"});
            } else {
                res.status(200).send({Gallery:galleryElim});
            }
        }
    });
}

function getGallery(req,res){
    var idGallery=req.params.id;
    Gallery.findById(idGallery,(err,galleryFind)=>{
        if (err) {
            res.status(500).send({mensaje:'No se logro encontrar'});
        } else {
            if (!galleryFind) {
                res.status(404).send({mensaje:"No se logro encontrar"});
            } else {
                res.json(galleryFind);
            }
        }
    });
}

function saveGallery(req,res){
    var gallery=new Gallery();
    var params=req.body;
    const date=new Date();
 
    gallery.titulo=params.titulo;
    gallery.descrip=params.descrip;
    gallery.imagen=params.imagen;
    gallery.likes=params.likes;
    gallery.fecha=date;

    if (gallery.titulo!=''&&
        gallery.descrip!=''&&
        gallery.imagen!='') {
        
        gallery.save((err,galleryGuardado)=>{
            if (err) {
                res.status(500).send({mensaje:'Error al guardar'});
            } else {
                if (!galleryGuardado) {
                    res.status(404).send({mensaje:'Error al guardar'});
                } else {
                    res.status(200).send({Gallery:galleryGuardado});
                }
            }
        });
    } else {
        res.status(500).send({mensajes:'datos vacios'});
    }
}

module.exports={
    getGallery,
    getGallerys,
    updateGallery,
    deleteGallery,
    saveGallery
}