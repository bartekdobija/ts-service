import 'reflect-metadata';
import server from './server';
import {logger} from 'ts-service-utils';

process.on('SIGINT', () => {
  process.exit(0);
});

const port = Number(process.env.API_PORT) || 8080;

server.listen(port, () => logger.info(`server is listening on ${port}`));
