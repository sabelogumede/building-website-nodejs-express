const express = require('express');

const router = express.Router();
// parse params as func arguments
module.exports = params => {
  // destructuring assignment
  const { speakersService } = params;

  router.get('/', async (req, res) => {
    // use the speaker service:
    const speakers = await speakersService.getList();
    return res.json(speakers);
  });

  // get by ID
  router.get('/:shortname', (req, res) => {
    return res.send(`Detail page of ${req.params.shortname}`);
    // res.render('pages/speakers', { pageTitle: 'Speakers' });
  });
  return router;
};
