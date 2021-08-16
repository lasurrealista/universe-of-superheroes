const express = require('express');
const config = require('config');
const logger = require('./config/logger');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const cors = require('./config/cors');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Authentication.
const authenticateJwt = require('./auth/authenticate');
const adminOnly = require('./auth/adminOnly');
const authHandler = require('./auth/authHandler');

const swaggerDocument = YAML.load('./docs/swagger.yaml');

const { join } = require('path');

const { host } = config.get('database');
mongoose
    .connect(host, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => 
    
        require('./seed/seeder'), // After the first 'npm run docker-compose:up' then comment it out.
        logger.info('MongoDB connection has been established successfully.'))

    .catch( err => {

        logger.error(err);
        process.exit();
        
    });

app.use(cors());

app.use(morgan('combined', {stream: logger.stream}));
app.use(bodyParser.json());

// Router.
app.post('/api/login', authHandler.login);
app.post('/api/refresh', authHandler.refresh);
app.post('/api/logout', authHandler.logout);

app.use('/api/superheroes', authenticateJwt, require('./controllers/superhero/routes'));
app.use('/api/marvel-characters', authenticateJwt, require('./controllers/marvelCharacter/routes'));
app.use('/api/marvel-comics', authenticateJwt, require('./controllers/marvelComic/routes'));
app.use('/api/marvel-creators', authenticateJwt, require('./controllers/marvelCreator/routes'));
app.use('/api/marvel-events', authenticateJwt, require('./controllers/marvelEvent/routes'));
app.use('/api/marvel-stories', authenticateJwt, require('./controllers/marvelStory/routes'));
app.use('/api/users', authenticateJwt, require('./controllers/user/routes'));
app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.static('public'));

// Page refreshing and frontend routing working properly
app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'));
});

app.use( (err, req, res, next) => {
    res.status(err.statusCode || 500);
    res.json({
        hasError: true,
        message: err.message
    });
});

module.exports = app;
