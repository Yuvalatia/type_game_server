import express, {
  Express,
  Request,
  Response,
} from 'express';
import cors from 'cors';

import routes from './routes';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));

app.get('/test', (req: Request, res: Response) => {
  res.status(200).send('TEST');
});

app.use(routes);

export default app;

