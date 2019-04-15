// dependencies
const Realisation = require('../sequelize').Realisation;
const fs = require('fs');

module.exports.realisationAddOne = (req,res) => {
    var newRealisation = new Realisation({
        title: req.body.title,
        description: req.body.description,
        mainPicture: req.body.mainPicture,
        pictures: req.body.pictures
    });
    newRealisation.save().then(realisation => {
        res.status(200).json(realisation);
    }).catch(err => {
        res.status(500).json({error: err});
    });
};

module.exports.realisationGetOne = (req,res) => {
    Realisation.findById(req.params.realisationId)
        .then(realisation =>  {
            res.status(200).json(realisation)
        })
        .catch(err => res.status(500).json(err));
};

module.exports.realisationGetAll = (req,res) => {
    Realisation.findAll()
        .then(realisations => {
            res.status(200).json(realisations);
        })
        .catch(err => res.status(500).json(err));
};

module.exports.realisationUpdate = (req,res) => {
    Realisation.findByPk(req.body.realisationId)
        .then(realisation => {
            realisation.title = req.body.title;
            realisation.description = req.body.description;
            realisation.mainPicture = req.body.mainPicture;
            realisation.pictures = req.body.pictures;
            realisation.save().then(realisation => res.json(realisation)).catch(err => res.json(err));
        })
        .catch(err => {
            res.json(err);
        });
};

module.exports.realisationDeleteOne = (req,res) => {
    Realisation
        .findByPk(req.params.realisationId)
        .then(realisation => {
            realisation.remove().then(()=>{
                res.status(400).json({success: true})
            });
        })
        .catch(err => {
           res.status(500).json(err);
        });
}