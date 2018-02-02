const methodOverride = require('method-override'),
      bodyParser = require('body-parser'),
      express = require('express'),
      app = express();

// server
app.listen(3000, () => console.log('App listening on port 3000'));

// APP SET UP
app.set('views', __dirname + '/public')
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));                 // Enable PUT and DELETE

// routes
app.use(require('./routes/cities'));
