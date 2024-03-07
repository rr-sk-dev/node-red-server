import express from 'express';
import http from 'http';
import { NodeRedService } from './node-red.service';

const bootstrap = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const NodeRED = new NodeRedService();
  await NodeRED.start(httpServer, app);
};

bootstrap();
