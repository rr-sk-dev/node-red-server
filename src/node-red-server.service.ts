import type { LocalSettings } from '@node-red/runtime';
import express from 'express';
import http from 'http';
import RED from 'node-red';
import { resolve } from 'path';

export class NodeRedServerService {
  private readonly port;

  private readonly settings: LocalSettings;

  constructor() {
    this.port = 1880;

    this.settings = {
      uiHost: '0.0.0.0',
      uiPort: this.port,
      httpAdminRoot: '/editor',
      userDir: './node-red/home',
      paletteCategories: ['configurations', 'custom'],
      editorTheme: {
        page: {
          title: 'Node-RED',
          css: [
            resolve(__dirname, '../node-red/styles/custom.css'),
            resolve(__dirname, '../node-red/styles/loading-spinner.css'),
            resolve(__dirname, '../node-red/styles/node-red.css'),
            resolve(__dirname, '../node-red/nodes/resources/nodes.css'),
          ] as any,
          scripts: [resolve(__dirname, '../node-red/scripts/notification.js')] as any,
        },
      },
    };
  }

  async start() {
    const app = express();
    const httpServer = http.createServer(app);

    RED.init(httpServer, this.settings);
    app.use(this.settings.httpAdminRoot as string, RED.httpAdmin);
    httpServer.listen(this.port);

    await RED.start();
  }
}
