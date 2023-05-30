const createError = require('http-errors');
const express = require('express');
const jwt = require('jsonwebtoken');
const { expressjwt } = require('express-jwt');
const db = require('./connectdb');
const sessions = require('express-session');
const cookieParser = require("cookie-parser");

//import routes
const blogRouter = require('./routes/blog');
const userRouter = require('./routes/users');

const app = express();

app.use(express.json());


app.use((req, res, next) => {
  req.user = jwt.decode(req.headers.authorization);
  next();
});

// add a session cookie for the user 
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay},
    resave: true
}));


app.use('/users', userRouter);
app.use('/blog', blogRouter);

// verifying jwt tokens
app.use(expressjwt({ secret: 'secret', algorithms: ["HS256"] }).unless({ path: ['/users/signup', '/users/login'] }));

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

});

module.exports = app;
