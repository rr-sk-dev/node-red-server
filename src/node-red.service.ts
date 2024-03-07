import type { LocalSettings } from '@node-red/runtime';
import { Express } from 'express';
import { Server } from 'http';
import RED from 'node-red';
import { resolve } from 'path';

export class NodeRedService {
  private readonly settings: LocalSettings = {
    uiHost: '0.0.0.0',
    uiPort: 1881,
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

  constructor() {}

  async start(httpServer: Server, app: Express) {
    RED.init(httpServer, this.settings);

    app.use(this.settings.httpAdminRoot as string, RED.httpAdmin);

    httpServer.listen(1881);

    await RED.start();
  }
}
