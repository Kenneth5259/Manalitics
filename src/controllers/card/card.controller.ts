import * as express from 'express';
import Database from '../../db';
import Card from '../../models/card.model';

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
        console.log(`${this.path}/search/id/`);
        this.router.get(this.path + '/search/id/:id', this.getCardById);
        this.router.get(this.path, this.getAllCards);
    }

    /**
     * full path: /api/cards
     * retrieve all cards in the database 
     * */ 
    getAllCards(request: express.Request, response: express.Response) {
        const connection = new Database().connection;
    
        connection.query("SELECT * FROM cards LIMIT 1000", (err, results, fields) => {
            if(err) {
                throw err;
            }
            response.status(200).send({
                message: "Called!",
                amount: results.length,
                cards: results
            });
        });
        connection.end();
        
    }
    /**
     * 
     * @param request 
     * @param response 
     * 
     * /api/cards/search/id/:id
     */
    getCardById(request: express.Request, response: express.Response) {
        response.send(request.params);
    }
}

export default CardController;