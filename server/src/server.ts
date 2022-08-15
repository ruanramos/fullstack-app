import { Request, Response } from "express";
import { MongooseError } from "mongoose";

require('dotenv').config();

const doctorsRoutes = require('./routes/doctors');
const usersRoutes = require('./routes/users');
const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use((req: Request, res: Response, next: any) => {
    console.log('In comes a request to: ', req.url, req.method, req.path);
    next();
});

app.use('/api/doctors', doctorsRoutes);
app.use('/api/users', usersRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log('Example app listening on port ' + port);
    }
    );
}).catch((err: MongooseError) => {
    console.log('Error connecting to MongoDB: ', err);
});