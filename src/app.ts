import * as express from 'express';
import * as bodyparser from 'body-parser';

class App {

    // express application, publicly available
    public app: express.Application;

    // port number for the application
    public port: number;

    /**
     * 
     * @param controllers array of controllers to be registered
     * @param port Port for the server to listen on
     */
    constructor(controllers, port) {

        // create an express instance
        this.app = express();

        // assign the port
        this.port = port;

        // initialize all middlewares
        this.initializeMiddlewares();

        // initialize all controllers
        this.initializeControllers(controllers);
    }

    /**
     * Initialize all middlewares
     * node modules intiialized firt
     * 
     * local middlewares second
     */
    private initializeMiddlewares() {
        this.app.use(bodyparser.urlencoded({extended: true}));
        this.app.use(bodyparser.json());
    }

    /**
     * 
     * @param controllers 
     * 
     * initialized all controllers through a for each loop
     */

    private initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/api', controller.router);
        })
    }

    // custom listen method to keep class interface similar to express
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`)
        })
    }
}

export default App;