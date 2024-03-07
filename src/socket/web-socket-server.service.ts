import { IncomingMessage } from 'http';
import { Server, WebSocket, WebSocketServer } from 'ws';

export class WebSocketServerService {
  private readonly wss: Server<typeof WebSocket, typeof IncomingMessage>;

  constructor(port: number) {
    this.wss = new WebSocketServer({ port });

    this.wss.on('connection', this.handleConnection);
  }

  send(event: string, message: string) {
    this.wss.emit(event, message);
  }

  private handleConnection(ws: WebSocket) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
      console.log('received: %s', data);
    });

    ws.send('something');

    ws.on('close', (code, reason) => {
      console.log('client close: %s', { code, reason: reason.toJSON() });
    });
  }
}
