import { NodeRedServerService } from './node-red-server.service';
import { createWebSocketServer } from './socket/web-socket-server';

const bootstrap = async () => {
  const nodeRedServerService = new NodeRedServerService();
  await nodeRedServerService.start();

  createWebSocketServer();
};

bootstrap();
