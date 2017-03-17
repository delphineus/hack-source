const express = require('express');
const app = express();
const path = require('path')

//establish port
const port = process.env.PORT || 3000;

//test server
app.get('/api/test', function(req, res) {
  res.send('<h1>Hello World! A product of the Constellation Delphinus</h1><img src="http://www.pixelstalk.net/wp-content/uploads/2016/01/Adventure-Time-Background-HD.jpg">') ;
});

//run middlewares
require('./config/middleware.js')(app, express);
// require('/routes.js')(app, express);


//connect to port
app.listen(port, function() {
  console.log(`P O R T 3000
-+88_
_+880_
_++88_
_++88_
__+880_________________________++_
__+888________________________+88_
__++880______________________+88_
__++888_____+++88__________+++8_
__++8888__+++8880++88____+++88_
__+++8888+++8880++8888__++888_
___++888++8888+++888888++888_
___++88++8888++8888888++888_
___++++++888888888888888888_
____++++++88888888888888888_
____++++++++000888888888888_
_____+++++++000088888888888_
______+++++++00088888888888_
_______+++++++088888888888_
_______+++++++088888888888_
________+++++++8888888888_
________+++++++0088888888_
________++++++0088888888_
________+++++0008888888_
________#############_`)
});