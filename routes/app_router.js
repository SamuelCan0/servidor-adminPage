'use strict'

var express=require('express');
var GalleryController=require('../controllers/gallery_controller');
var ProjectController=require('../controllers/project_controller');
var api=express.Router();

api.post('/saveG',GalleryController.saveGallery);
api.get('/gallerys',GalleryController.getGallerys);
api.put('/updateG/:id',GalleryController.updateGallery);
api.delete('/deleteG/:id',GalleryController.deleteGallery);
api.get('/gallery/:id',GalleryController.getGallery);

api.post('/saveP',ProjectController.saveProject);
api.get('/projects',ProjectController.getProyects);
api.put('/updateP/:id',ProjectController.updateProyect);
api.delete('/deleteP/:id',ProjectController.deleteProject);
api.get('/project/:id',ProjectController.getProject);

module.exports=api;