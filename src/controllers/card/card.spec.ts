// required node_module imports
import * as http from 'http';
import * as supertest from 'supertest';

// required class imports
import App from '../../app';
import CardController from './card.controller';

/**
 * Creates an HTTP Server instance from the public express app within the app class
 * Only registers the controller under testing
 */
const server = http.createServer(new App([new CardController()], 5000).app)

// supertest requires an HTTP Server Instance.
const request = supertest(server);

/**
 * Test Suite to test the expected behavior of the following
 * 
 * Endpoint: /api/cards
 * Accepted Methods: GET
 * Requires Auth: False
 */
describe("GET /api/cards to return all cards", () => {
    
    // test method always returns 200
    it("Should give a status of 200", async () => {
        const response = await request.get('/api/cards');
        expect(response.status).toEqual(200);
    });

    // test method always returns message called
    it("Should give a message of Called!", async () => {
        const response = await request.get('/api/cards');
        expect(response.body.message).toBe("Called!");
    });
});

/**
 * Test Suite to test the expected behavior of the following
 * 
 * Endpoint: /api/cards/search/id/:id
 * Accepted Methods: GET
 * Requires Auth: False
 */

describe("GET /api/cards/search/id/:id", () => {
    it("Should give a status of 200", async () => {
        const response = await request.get('/api/cards/search/id/1');
        expect(response.status).toEqual(200);
    })
    it("Should responde with a matching id from url", async () => {
        const response = await request.get('/api/cards/search/id/1');
        expect(response.body.id).toBe("1");
    })
})