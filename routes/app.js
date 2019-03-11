const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlRealisation = require('../controllers/realisation.controller');

const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images/uploads')
    },
    filename: (req, file, cb) => {
        console.log('file',file)
      cb(null, file.originalname.split('.')[0] + '-' + Date.now() + '.' + file.originalname.split('.')[1])
    }
});
var upload = multer({storage: storage});

router
    .route('/login')
    .post(ctrlUser.login);

router
    .route('/users')
    .post(ctrlUser.userAddOne);

router
    .route('/realisations')
    .get(ctrlRealisation.realisationGetAll)
    .post(ctrlRealisation.realisationAddOne);

router
    .route('/realisations/:realisationId')
    .get(ctrlRealisation.realisationGetOne)
    .put(ctrlRealisation.realisationUpdate);


router
    .route('/upload')
    .post(upload.single('mainImageUpload'), (req,res) => {
        console.log('ICI',req)
        if (!req.file){
            console.log('NO FILE RECEIVED');
            res.send({success: false });
        } else {
            console.log('FILE RECEIVED');
            return res.send({success: true, file: req.file});
        }
    });


module.exports = router;