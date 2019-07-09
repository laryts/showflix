import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import cors from 'cors';

import routes from './routes';

const app = express();

const server = http.Server(app);
const io = require('socket.io')(server);

mongoose.connect(
  'mongodb+srv://lary:lts8102.@cluster0-xg0ez.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(express.json());

app.use(cors());

app.use(routes);

server.listen(3333);
