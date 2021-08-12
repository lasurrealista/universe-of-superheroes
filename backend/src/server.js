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

const { host } = config.get('database');
mongoose
    .connect(`mongodb://${host}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => 
    
        //require('./seed/seeder'), // After the first 'npm run docker-compose:up' then comment it out.
        logger.info('MongoDB connection has been established successfully.'))

    .catch( err => {

        logger.error(err);
        process.exit();
        
    });

app.use(cors());

app.use(morgan('combined', {stream: logger.stream}));
app.use(bodyParser.json());

// Router.
app.post('/login', authHandler.login);
app.post('/refresh', authHandler.refresh);
app.post('/logout', authHandler.logout);

app.use('/superheroes', authenticateJwt, require('./controllers/superhero/routes'));
app.use('/marvel-characters', authenticateJwt, require('./controllers/marvelCharacter/routes'));
app.use('/marvel-comics', authenticateJwt, require('./controllers/marvelComic/routes'));
app.use('/marvel-creators', authenticateJwt, require('./controllers/marvelCreator/routes'));
app.use('/marvel-events', authenticateJwt, require('./controllers/marvelEvent/routes'));
app.use('/marvel-stories', authenticateJwt, require('./controllers/marvelStory/routes'));
app.use('/users', authenticateJwt, require('./controllers/user/routes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use( (err, req, res, next) => {
    res.status(err.statusCode || 500);
    res.json({
        hasError: true,
        message: err.message
    });
});

module.exports = app;
