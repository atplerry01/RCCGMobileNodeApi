import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as helmet from 'helmet';
import * as path from 'path';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import routes from './routes';

dotenv.config();

createConnection()
  .then(async (connection) => {
    if (!process.env.PORT) {
      process.exit(1);
    }

    const PORT: number = parseInt(process.env.PORT as string, 10);

    const app = express();

    // Call midlewares
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());

    app.use('/api/', routes);

    // static www files use express
    // const wwwPath = path.join(__dirname, 'www');
    // app.use('/', express.static(wwwPath));
    app.use(express.static(path.join(__dirname, 'www')));
    app.set('view engine', 'html');

    app.listen(PORT, () => {
      console.log(`🚀 Server ready at http://localhost:${PORT} for REST APIs`);
    });
  })
  .catch((error) => console.log(error));
