import express, { Router, Request, Response } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import session from 'express-session';

config();
const app = express();
const route = Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const configSession: session.SessionOptions = {
  secret: 'carpssession', // Chave secreta
  resave: false, // Se true, a sessão será regravada no servidor
  saveUninitialized: false, // Se true cria uma nova sessão sempre que a mesma for modificada.
};
app.use(session(configSession));

app.use((err: Error, req: Request, res: Response, next: Function) => {
  if (err) {
    res.status(500).json({
      mensagem: 'Erro interno.',
      error: err.toString(),
      contato: 'jairmaiag@gmail.com',
    });
  }
  next();
});

route.get('/', (req: Request, res: Response) => {
  res.json({ message: `hello world with Typescript 1 ${process.env.APP_NAME}` })
});

app.use(route);
export default app;