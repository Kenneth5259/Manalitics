/** Required for development */
import App from './app';
import CardController from './controllers/card/card.controller';

/** creates a new app instance, registers controlleres */
const app = new App([
    // Register new controller instances here
    new CardController()
], 3000);



/** executes the express server */
app.listen();

