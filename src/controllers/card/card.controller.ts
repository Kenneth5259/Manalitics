import * as express from 'express';
import CardModel from '../../models/card.model';

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
        this.router.get(this.path + '/search/id/:id', this.getCardById);
        this.router.get(this.path + '/search/name/:name', this.getCardsByName);
        this.router.get(this.path, this.getAllCards);
    }

    /**
     * full path: /api/cards
     * retrieve all cards in the database 
     * */ 
    getAllCards(request: express.Request, response: express.Response) {
        
        new CardModel().getAllCards()
            .then(cards => {
                response.status(200).send({
                    message: "Results Found",
                    results: cards.length,
                    cards: cards
                })
            })
            .catch(err => {
                console.error(err);
                response.status(200).send({
                    message: "Cards not Found",
                    cards: null
                })
            })
        
    }
    /**
     * 
     * @param request 
     * @param response 
     * 
     * /api/cards/search/id/:id
     */
    getCardById(request: express.Request, response: express.Response) {
        const id = request.params.id;

        new CardModel().getCardById(id)
            .then(card => {
                response.status(200).send({
                    message: "Result Found",
                    card: card
                })
            })
            .catch(err => {
                console.error(err);
                response.status(200).send({
                    message: "Result Not Found",
                    card: null
                })
            });
    }

    getCardsByName(request: express.Request, response: express.Response) {
        const name: string = request.params.name;

        new CardModel().getCardsByName(name)
            .then(cards => {
                response.status(200).send({
                    message: "Results Found",
                    results: cards.length,
                    cards: cards
                })
            })
            .catch(err => {
                console.error(err);
                response.status(200).send({
                    message: "Results Not Found",
                    cards: null
                })
            });
    }
}

export default CardController;