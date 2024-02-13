import type { LocalSettings } from '@node-red/runtime';
import express from 'express';
import http from 'http';
import RED from 'node-red';
import path from 'path';
import { createWebSocket } from './server/socket';

const app = express();
app.use('/', express.static('public'));

const httpServer = http.createServer(app);

const NODE_RED_PORT = 1881;

const settings: LocalSettings = {
  uiHost: '0.0.0.0',
  uiPort: NODE_RED_PORT,
  httpAdminRoot: '/editor',
  userDir: './node-red/home',
  paletteCategories: ['configurations'],
  editorTheme: {
    page: {
      title: 'Node-RED',
      css: [
        path.resolve(__dirname, './node-red/styles/custom.css'),
        path.resolve(__dirname, './node-red/styles/loading-spinner.css'),
        path.resolve(__dirname, './node-red/styles/node-red.css'),
        path.resolve(__dirname, './node-red/nodes/resources/nodes.css'),
      ] as any,
      scripts: [path.resolve(__dirname, './node-red/scripts/notification.js')] as any,
    },
  },
};

const bootstrap = async () => {
  RED.init(httpServer, settings);

  app.use(settings.httpAdminRoot as string, RED.httpAdmin);

  httpServer.listen(NODE_RED_PORT);

  createWebSocket();

  await RED.start();
};

bootstrap();
