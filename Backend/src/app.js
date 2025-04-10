import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();
const corsOptions = {
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'PATCH'], 
    credentials: true,               
  };
  app.use(cookieParser());
  app.use(cors(corsOptions));

  app.options('*', cors(corsOptions));

app.use(express.json({limit:"16kb"}));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World!');
});


export {app}