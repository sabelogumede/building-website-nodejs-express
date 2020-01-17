const express = require('express');

const router = express.Router();

// parse params
module.exports = params => {
  // destructuring assignment
  const { feedbackService } = params;

  router.get('/', async (req, res) => {
    // use the feedback service:
    const feedback = await feedbackService.getList();
    return res.json(feedback);
  });
  // post feedback
  router.post('/', (req, res) => {
    return res.send('Feedback form posted');
  });
  return router;
};
