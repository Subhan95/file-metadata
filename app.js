var express = require('express');
var multer = require('multer');
var path = require('path');
var upload = multer({ dest: 'uploads/' })

var app = express()

app.use(express.static(path.join(__dirname,'public')))

// app.get('/', function(req, res){

// })

app.post('/upload', upload.single('file'),function(req, res){
	fs.unlink()
	if (req.file) {
		res.json({size: req.file.size})
	}
})

// process.env.PORT
app.listen(3000)
console.log('Server running on port 3000');