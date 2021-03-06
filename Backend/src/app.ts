import express, { urlencoded } from "express";
import morgan from 'morgan';
import cors from 'cors';

import passport from 'passport';
//import passportMiddleware from './utils/passport'

import checkAPI from './interfaces/routes/checkAPI';
import hello from './interfaces/routes/hello';
import products from "./interfaces/routes/products";
import auth from "./interfaces/routes/auth";
import productOrders from "./interfaces/routes/productOrders";


const app = express();

app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(passport.initialize());
//passport.use(passportMiddleware);


app.use(checkAPI);
app.use(hello);
app.use(products);
app.use(auth);
app.use(productOrders);

export default app;