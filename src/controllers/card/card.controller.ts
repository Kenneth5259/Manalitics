import * as express from 'express';

class CardController {

    // define a the path for the controller
    public path = '/cards';

    // declare a router for the controller
    public router = express.Router();

    // constructs the controller
    constructor() {
        this.initializeRoutes();
    }

    // function to register every route
    public initializeRoutes() {
        this.router.get(this.path, this.getAllCards);
    }

    /**
     * full path: /api/cards
     * retrieve all cards in the database 
     * */ 
    getAllCards(request: express.Request, response: express.Response) {
        response.status(200).send({message: "Called!"});
    }
}

export default CardController;