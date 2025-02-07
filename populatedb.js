#! /usr/bin/env node
require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {

    const dbEnvironment = process.argv[2];
    if (dbEnvironment == "prod") {
        console.log(`connection string: ${process.env.CONNECTION_STRING_PROD}`)
    }
    else if (dbEnvironment == "local") {
        console.log("seeding...");
        const client = new Client({
            connectionString: process.env.CONNECTION_STRING_LOCAL,
        });
        await client.connect();
        await client.query(SQL);
        await client.end();
        console.log("done");
    }
    else { console.log("not connected. Please specify 'prod' or 'local' when using this script") }
}

main();
