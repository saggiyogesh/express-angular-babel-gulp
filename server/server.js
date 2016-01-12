import 'babel-polyfill';
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import livereload from 'connect-livereload';

let env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let app = express();

// Insert LiveReload snippet when in development mode only
if(env === 'development') {
  console.log('App running in development environment');
  app.use(livereload({port: 35729}));
}


import users from './routes/users';

app.use('/users', users);

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(methodOverride());

app.set('port', process.env.PORT || 3000);

export default app;
