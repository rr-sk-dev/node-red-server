import { WebSocket } from 'ws';

let ws: WebSocket;

export const createWebSocket = () => {
  ws = new WebSocket('ws://localhost:8080/ws');

  ws.on('error', (err) => {
    console.log('\n--------------- Socket Error ---------------');
    console.log(err, '\n');
  });

  ws.on('open', function open() {
    console.log('Connected to ws server');

    ws.send('Hello, WS!');
  });

  ws.on('message', function message(data) {
    console.log('\n--------------- Socket Message ---------------');
    console.log(data.toString(), '\n');
  });

  ws.on('close', (code, reason) => {
    console.log(`Connection closed. Code: ${code}, Reason: ${reason}`);
  });
};
