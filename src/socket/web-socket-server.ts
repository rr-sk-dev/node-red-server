import { WebSocket, WebSocketServer } from 'ws';

const handleConnection = (ws: WebSocket) => {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.on('close', (code, reason) => {
    console.log('client close: %s', { code, reason: reason.toJSON() });
  });

  ws.send('Hi from Node-RED 👋');
};

export const createWebSocketServer = () => {
  const wss = new WebSocketServer({ port: 1881 });

  wss.on('connection', handleConnection);
};
