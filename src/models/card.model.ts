// import Database Class
import { MysqlError } from 'mysql';
import Database from '../db';

// Define an interface for a Card
interface Card {
    id: number;
    name: string;
    set: string;
    set_code: string;
    type: string;
    power?: string;
    toughness?: string;
    loyalty?: string;
    manacost: string;
    converted_manacost: number
    artist: string;
    flavor?: string;
    color: string;
    number: number;
    rarity: string;
    rating: number;
    ruling?: string;
    ability?: string;
    number_int: number;
    color_identity?: string; 
}


// Class for interfacing with database
class CardModel  {

    /**
     * 
     * @param object JSON Casted RowDataPacket from MySQL
     * 
     * conforms each property to the interface and returns
     */
    private conformToInterface(object): Card {
        return {
            id: object.id,
            name: object.name,
            set: object.set,
            set_code: object.setCode,
            type: object.type,
            power: object.power,
            toughness: object.toughness,
            loyalty: object.loyalty,
            manacost: object.manacost,
            converted_manacost: object.converted_manacost,
            artist: object.artist,
            flavor: object.flavor,
            color: object.color,
            number: object.number,
            rarity: object.rarity,
            rating: object.rating,
            ruling: object.ruling,
            ability: object.ability,
            number_int: object.number_int,
            color_identity: object.color_identity 
        }
    }

    /**
     * Asynchronous call to all cards
     */
    public async getAllCards(): Promise<Card[]> {

        // create a new connection instance
        const connection = new Database().connection;

        // create a cards promise
        const cards = new Promise<Card[]>((resolve, reject) => {

            // run the query, limited to 1000
            connection.query("SELECT * FROM cards LIMIT 1000", (err, results, fields) => {

                // check for error, reject if true
                if(err) {
                    reject(new Error("Issue with Query"));
                    throw err;
                }

                // define an array of cards
                let cards: Card[] = [];

                // map the query result to the interface
                results.map(c => {

                    // JSON stringify and parsing resolves an issue with RowDataPacket accessibility
                    let card = JSON.parse(JSON.stringify(c));

                    // cast each property
                    let res: Card = this.conformToInterface(card);

                    // push to cards array
                    cards.push(res);
                })

                // resolve the promise after mapping
                resolve(cards);
            });

            // close the database connection
            connection.end();
            });
        
        // return the promise
        return cards;
    
        
    }


    /**
     * 
     * @param id 
     * Asynchronous call to retrieve a card by id
     */
    public async getCardById(id: string): Promise<Card> {

        // create a new database connection instance
        const connection = new Database().connection;

        // create a new promise
        const card = new Promise<Card>((resolve, reject) => {

            // run the query
            connection.query(`SELECT * FROM cards where id=${id}`, (err, results) => {

                // check for any error, reject promise if necessary
                if(err) {
                    reject(new Error("Issue with Query"));
                    throw err;
                }

                // Handle RowDataPacket conversion
                let card = JSON.parse(JSON.stringify(results[0]));

                // conform to interface
                let res: Card = this.conformToInterface(card);
                
                // resolve the promise
                resolve(res);

                // close the DB connection
                connection.end();
            });
        })
        
        // return the promise
        return card;   
    }

    public async getCardsByName(name: string): Promise<Card[]> {

        // create a new database connection instance
        const connection = new Database().connection;

        // create a new promise for the card array
        const cards = new Promise<Card[]>((resolve, reject) => {

            // perform the query
            connection.query(`SELECT * FROM cards WHERE name LIKE "%${name}%"`, (err: MysqlError, results) => {

                // check for an error, reject if true
                if(err) {
                    reject(new Error("Issue with Query"));
                    throw(err);
                }

                // define a card array
                let cards: Card[] = [];

                // map each result
                results.map(c => {

                    // parse information from RowDataPacket
                    let card = JSON.parse(JSON.stringify(c));

                    // conform the json object to the card interface
                    let res: Card = this.conformToInterface(card);

                    cards.push(res);
                });

                // resolve the promise
                resolve(cards);

                // close the database connection
                connection.end();
            })
        })

        return cards;
    }
}

export default CardModel;
