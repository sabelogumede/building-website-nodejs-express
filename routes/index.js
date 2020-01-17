const express = require('express');
// import other routes
const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

// create a router instance
const router = express.Router();

// parse 'params'function arguments from services: imported in our server.js
module.exports = params => {
  router.get('/', (req, res) => {
    // visit counter, store visit counter in session object
    if (!req.session.visitcount) {
      req.session.visitcount = 0;
    }
    req.session.visitcount += 1;
    console.log(`Number of visits: ${req.session.visitcount}`);
    //
    res.render('pages/index', { pageTitle: 'Welcome' });
  });
  // incluede other routes imported
  // parse down the params func:
  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
};
