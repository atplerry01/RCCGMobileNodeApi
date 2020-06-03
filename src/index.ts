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

    const PORT = process.env.PORT || 5000 // parseInt(process.env.PORT as string, 10);

    const app = express();
    
    if (process.env.NODE_ENV === "development") {
      const morgan = require('morgan');
      app.use(morgan('dev'));
    }
  
    // Call midlewares
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json({
      limit: '50mb'
    }));

    app.use('/api/', routes);

    // static www files use express
    // const wwwPath = path.join(__dirname, 'www');
    // app.use('/', express.static(wwwPath));
    app.use(express.static(path.join(__dirname, 'www')));
    app.set('view engine', 'html');

    // handle global exceptions
    process.on('uncaughtException', function (err) {
      console.error('global exception:', err.message);
    });
    process.on('unhandledRejection', function (reason: any, _promise) {
      console.error('unhandled promise rejection:', reason.message || reason);
    });

    app.listen(PORT, () => {
      console.log(`🚀 Server ready at http://localhost:${PORT} for REST APIs`);
    });

  })
  .catch((error) => {
    // console.log(error)
  });
