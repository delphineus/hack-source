const morgan = require('morgan');
const bodyParser = require('body-parser');
var routes = require('./routes');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '/')));
  app.use('/api', routes);
};
