import Database from '../db';
import * as express from 'express';

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

class CardModel  {

    public async getCardById(id: string): Promise<Card> {
        const connection = new Database().connection;
        

        const card = new Promise<Card>((resolve, reject) => {
            connection.query(`SELECT * FROM cards where id=${id}`, (err, results) => {
                if(err) {
                    reject(new Error("Issue with Query"));
                    throw err;
                }
                let card = JSON.parse(JSON.stringify(results[0]));
                let res: Card = {
                    id: card.id,
                    name: card.name,
                    set: card.set,
                    set_code: card.setCode,
                    type: card.type,
                    power: card.power,
                    toughness: card.toughness,
                    loyalty: card.loyalty,
                    manacost: card.manacost,
                    converted_manacost: card.converted_manacost,
                    artist: card.artist,
                    flavor: card.flavor,
                    color: card.color,
                    number: card.number,
                    rarity: card.rarity,
                    rating: card.rating,
                    ruling: card.ruling,
                    ability: card.ability,
                    number_int: card.number_int,
                    color_identity: card.color_identity 
                }

               
                resolve(res);
                connection.end();
            });
        })
        return card;   
    }
}

export default CardModel;
