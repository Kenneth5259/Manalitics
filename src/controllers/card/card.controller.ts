import * as express from 'express';

class CardController {
    public path = '/cards';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.getAllCards);
    }
    getAllCards(request: express.Request, response: express.Response) {
        response.status(200).send({message: "Called!"});
        //response.send('This is a test response');
    }
}

export default CardController;