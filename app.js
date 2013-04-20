
/**
 * Module dependencies.
 */

var express = require('express')
  , session = require('./routes/session')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , mysql = require('./libs/mysql')
  , path = require('path');

var app = express();

var MemStore = require('connect/lib/middleware/session/memory');

var env = process.argv[2] || process.env.NODE_ENV || 'development'
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session({store: MemStore({
    reapInterval:  6000 * 10
  })}));
  app.use(function (req, res, next) {
      console.log(req.session.username)
      res.locals.session = req.session;
      res.locals.env = env;
      res.locals.title = 'Gallery';
      res.locals.message = '';
      res.role = req.session.role || '';
      next();
  });
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


/* Sessions */
app.post('/login', session.login);
app.post('/registration', session.registration);
app.get('/logout', session.logout);



app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
