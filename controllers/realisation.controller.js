// dependencies
const Realisation = require('../sequelize').Realisation;
const fs = require('fs');

module.exports.realisationAddOne = (req,res) => {
    console.log('create realisation',req.body.pictures);
    var newRealisation = new Realisation({
        title: req.body.title,
        description: req.body.description,
        mainPicture: req.body.mainPicture,
        pictures: req.body.pictures
    });
    newRealisation.save().then(realisation => {
        res.status(200).json(realisation);
    }).catch(err => {
        console.log('error',err);
        res.status(500).json({error: err});
    });
};

module.exports.realisationGetOne = (req,res) => {
    Realisation.findById(req.params.realisationId)
        .then(realisation =>  {
            console.log('find by id', realisation);
            res.json(realisation)
        })
        .catch(err => res.status(400).json(err));
};

module.exports.realisationGetAll = (req,res) => {
    Realisation.findAll()
        .then(realisations => {
            res.json(realisations);
            console.log('REALISATIONS',realisations);
        })
        .catch(err => res.status(400).json(err));
};

module.exports.realisationUpdate = (req,res) => {
    console.log("params",req.params.realisationId);
    console.log("body",req.body);
    Realisation.findByPk(req.body.realisationId)
        .then(realisation => {
            console.log('affiche la realisation before the update',realisation);
            realisation.title = req.body.title;
            realisation.description = req.body.description;
            
            realisation.mainPicture = req.body.mainPicture;
            realisation.pictures = req.body.pictures;
            realisation.save().then(realisation => res.json(realisation)).catch(err => res.json(err));
        })
        .catch(err => {
            console.log('ERROR UPDATE',error);
            res.json(err);
        });
};

module.exports.realisationDeleteOne = (req,res) => {
    console.log('req params id',req.params.realisationId)
    Realisation
        .findByPk(req.params.realisationId)
        .then(realisation => {
            realisation.remove().then(()=>{
                console.log('realisation deleted')
                res.status(400).json({success: true})
            });
        })
        .catch(err => {
            console.log('err',err);
            res.json(err);
        });
}