import * as express from 'express';
import * as socketIo from 'socket.io';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { createServer, Server } from 'http';
import { Routes} from './routes/routes';
import { authMiddleware } from './routes/middleware/auth.middleware';
import { WebSocket } from './socket/webSocket';
import { FailCurrentTasksJob } from './jobs/failCurrentTasksJob';

const cors = require('cors');

export class App {
    public static readonly HTTP_PORT: number = 8080;

    public static readonly WS_PORT: number = 3000;

    private readonly application: express.Application;

    private routes: Routes = new Routes();

    private webSocket: WebSocket = new WebSocket();

    private readonly server: Server;

    // @ts-ignore
    private io: SocketIO.Server;

    private readonly port: string | number;

    private readonly wsPort: string | number;

    private failCurrentTasksJob: FailCurrentTasksJob = new FailCurrentTasksJob();

    constructor() {
        this.application = express();
        this.port = process.env.HTTP_PORT || App.HTTP_PORT;
        this.wsPort = process.env.WS_PORT || App.WS_PORT;
        this.application.use(cors());
        this.application.use(bodyParser.json());
        this.application.use(bodyParser.urlencoded({extended: false}));
        this.application.use(authMiddleware);
        this.application.options('*', cors());
        this.server = createServer(this.application);
        this.initSocket();
        this.listen();
        this.initSocket();
        this.routes.routes({app: this.app});
        this.webSocket.webSocket({io: this.io});
    }

    private initSocket(): void {
        // @ts-ignore
        this.io = socketIo(this.server);
    }

    private listen(): void {

        this.application.listen(this.port, () => {
            console.log('Express server listening on port ' + this.port);
            this.failCurrentTasksJob.failCurrentTasks();
        });

        this.server.listen(this.wsPort, () => {
            console.log('Running ws server on port %s', this.wsPort);
        });

        mongoose.connect('mongodb://localhost:27017/task-manager', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        mongoose.connection.on('open', () => {
            console.info('Connected to Mongo.');
        });

        mongoose.connection.on('error', (err: any) => {
            console.error(err);
        });
    }

    get app(): express.Application {
        return this.application;
    }
}

