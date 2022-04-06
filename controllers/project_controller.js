'use strict'
var Project=require('../models/project');

function getProyects(req,res){
    Project.find(
        function(err,proyects){
            if (err) {
                res.status(500).send({mensaje:'Error al obtener los Datos'});
            } else {
                res.json(proyects);
            }
        }
    ).sort({"fecha":-1});
}

function updateProyect(req,res){
    var idProyect=req.params.id;
    var proyectActual=req.body;
    Project.findByIdAndUpdate(idProyect,proyectActual,(err,projectModifi)=>{
        if (err) {
            res.send(500).send({mensaje:'Error en el servidor'});
        } else {
            if(!projectModifi){
                res.status(404).send({mensaje:"No se logro Actualizar"});
            }else{
                res.status(200).send({Project:projectModifi});
            }
        }
    });
}

function deleteProject(req,res){
    var idProyect=req.params.id;
    Project.findByIdAndRemove(idProyect,(err,projectElim)=>{
        if (err) {
            res.send(500).send({mensaje:'Error en el servidor'});
        } else {
            if (!projectElim) {
                res.status(404).send({mensaje:"No se logro Eliminar"});
            } else {
                res.status(200).send({Project:projectElim});
            }
        }
    });
}

function getProject(req,res){
    var idProyect=req.params.id;
    Project.findById(idProyect,(err,proyectFind)=>{
        if (err) {
            res.status(500).send({mensaje:'No se logro encontrar'});
        } else {
            if (!proyectFind) {
                res.status(404).send({mensaje:"No se logro encontrar"});
            } else {
                res.json(proyectFind);
            }
        }
    });
}

function saveProject(req,res){
    var project=new Project();
    var params=req.body;
    const date=new Date();

    project.titulo=params.titulo;
    project.descrip=params.descrip;
    project.image=params.image;
    project.fecha=date;

    if (project.titulo!='' && project.descrip!='' && project.image!='') {
        project.save((err,projectSave)=>{
            if (err) {
                res.status(500).send({mensaje:'Error al guardar'});
            } else {
                if (!projectSave) {
                    res.status(404).send({mensaje:'Error al guardar'});
                } else {
                    res.status(200).send({Project:projectSave});
                }
            }
        });
    } else {
        res.status(500).send({mensajes:'datos vacios'});
    }
}

module.exports={
    getProject,
    getProyects,
    updateProyect,
    deleteProject,
    saveProject
}