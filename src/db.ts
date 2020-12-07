
import * as mysql from 'mysql';

class Database {
    public connection: mysql.Connection;

    constructor() {
        this.initializeDatabase();
        this.connect();
    }

    /**
     * 
     * Custom connect method to keep class interface similar to mysql
     */
    public connect() {
        this.connection.connect((err) => {
            if(err) {
                return console.error('Error: ' + err);
            }
        })
    }
    private initializeDatabase() {
        this.connection = mysql.createConnection({
            host: process.env.HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB
        });
    }
    
}
export default Database;