/** Required for development */
import App from './app';
import CardController from './controllers/card/card.controller';

import * as dotenv from 'dotenv';

dotenv.config();

/** creates a new app instance, registers controlleres */
const app = new App([
    // Register new controller instances here
    new CardController()
], process.env.PORT);

/** executes the express server */
app.listen();

