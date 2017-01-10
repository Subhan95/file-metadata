var express = require('express');
var multer = require('multer'); 
// Multer works only on forms whose enctype="multipart/form-data"
var path = require('path');
var upload = multer({ storage: multer.memoryStorage() })

var app = express()

app.use(express.static(path.join(__dirname,'public')))

app.post('/upload', upload.single('file'),function(req, res){
	res.json({name: req.file.originalname, size: req.file.size})
})

app.listen(process.env.PORT || 3000)
console.log('Server running on port 3000');