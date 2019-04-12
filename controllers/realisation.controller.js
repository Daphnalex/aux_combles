// dependencies
const Realisation = require('../sequelize').Realisation;
const fs = require('fs');

module.exports.realisationAddOne = (req,res) => {
    console.log('create realisation',req.body);
    var newRealisation = new Realisation({
        title: req.body.title,
        description: req.body.description,
        mainPicture: req.body.mainPicture,
        pictures: req.body.pictures
    });
    newRealisation.save().then(realisation => {
        res.json(realisation);
    }).catch(err => {
        console.log('error',err);
        res.status(409).json({error: err});
    });
};

module.exports.realisationGetOne = (req,res) => {
    Realisation.findById(req.params.realisationId)
        .then(realisation => res.json(realisation))
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
            realisation.title = req.body.title || realisation.title;
            realisation.description = req.body.description || realisation.description;
            realisation.mainPicture = req.body.mainPicture;
            //realisation.customerReview = req.body.customerReview || realisation.customerReview;
            realisation.save().then(realisation => res.json(realisation)).catch(err => res.json(err));
        })
        .catch(err => res.json(err));
};

module.exports.realisationDeleteOne = (req,res) => {
    Realisation.findByPk(req.params.realisationId)
        .then(realisation => {
            realisation.remove().then(()=> res.json({status: "deleted"})).catch(err => res.json(err));
        })
}