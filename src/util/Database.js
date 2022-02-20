const { Client } = require('pg')
import { CONFIG } from '../constant/Common'

const client = new Client({
    host: CONFIG.PG_HOST,
    port: CONFIG.PG_PORT,
    user: CONFIG.PG_USER,
    password: CONFIG.PG_PASS,
    database: CONFIG.PG_DB,
})

client.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    }
})

client.query(`SET search_path TO '${CONFIG.PG_SCHEMA}';`);

export const query = async (sql, params) => {
    return new Promise((resolve, reject) => {
        client.query(sql, params, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};
