import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server by wito');
});

app.listen(port, () => {
  console.log(`This server running on port ${port}`);
});
