import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//new versions of express do not know how to handle post request. Hence, to resolve that, this body-parser package
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();

app.use(cors());
//to start parsing json int the body
app.use(bodyParser.json({ extended: true }));
//parse the url
//usde because, if for ex there are some empy spaces in the url, browser will replace those spaces with some random characters. We need to parse the actual url after removing those extra random character
app.use(bodyParser.urlencoded({ extended: true }));

//since we do not have any static route, leave the first arg empty:/ and second argument as router
app.use('/', Router);


const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));