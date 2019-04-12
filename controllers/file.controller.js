const fs = require('fs');
const path = './public/images/uploads/';

module.exports.fileDeleteOne = (req,res) => {
    console.log('REQ',req.body.element);
    
    try {
        fs.unlinkSync(path + req.body.element);
        console.log('successfully deleted ');
    } catch(err) {
        console.log('error occured',err);
    }
    
}