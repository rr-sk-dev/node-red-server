import { IncomingMessage } from 'http';
import { Server, WebSocket, WebSocketServer } from 'ws';

let wss: Server<typeof WebSocket, typeof IncomingMessage>;

export const createWebSocket = () => {
  wss = new WebSocketServer({ port: 8080 });

  console.log('\n[wss] running', '\n');

  wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
      console.log('received: %s', data);
    });

    ws.send('something');

    ws.on('close', (code, reason) => {
      console.log('client close: %s', { code, reason: reason.toJSON() });
    });
  });
};
