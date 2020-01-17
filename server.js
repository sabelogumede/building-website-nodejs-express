const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
// import services classes
const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');
// instances of our important classes
const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');

// import routes
const routes = require('./routes');

const app = express();

const port = 3000;
//
app.set('trust proxy', 1);
// cookieSession middleware
app.use(
  cookieSession({
    name: 'session',
    keys: ['SabeloG3987', 'jdfhdhfd'],
  })
);

// templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// serving static files like css & images
app.use(express.static(path.join(__dirname, './static')));

// catch all routes imported : app.use('/',routes())
// & parse down the services instances object
app.use(
  '/',
  routes({
    feedbackService,
    speakersService,
  })
);

app.listen(port, () => {
  console.log(`Express server listerning on ${port}!`);
});
