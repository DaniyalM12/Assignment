import express from 'express';
import config from 'config';
import log from './logger';

import router from './router';

const host = config.get("host") as string;
const port = config.get("port") as number;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, host, () => {
    log.info(`Server Listening at http://${host}:${port}`);
    // connect();
    router(app)
});

