const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());
const bookRouter = require('./routes/bookrouter.js');
const manualEntryRouter = require('./routes/manualEntryroute.js');
const titleRouter = require('./routes/titlerouter.js');
const ratingRouter = require('./routes/ratingrouter.js');
/* Routes */
app.use('/api/user', userRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

// Routes
app.use('/book', bookRouter);
app.use('/manual', manualEntryRouter);
app.use("/title",titleRouter)
app.use("/rating",ratingRouter)

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
