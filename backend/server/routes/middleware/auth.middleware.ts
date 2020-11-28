import * as express from 'express';

const jwt = require('jsonwebtoken');

const authMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
	console.info(`${req.method} ${req.originalUrl}`);
	const start = new Date().getTime();
    
    if (req.url === '/login' || req.url === '/api/auth/signin' || req.url.includes('/api-docs')) {
        next();
    } else {
        const [tokenType, jwtToken] = req.headers['authorization'].split(' ');
        console.log(`tokenType: ${tokenType}`);
        console.log(`jwtToken: ${jwtToken}`);
        try {
            jwt.verify(jwtToken, 'jwtSecret');
        } catch (error) {
            res.status(401).send();
            return;
        }
        next();
    }

    res.on('finish', () => {
		const elapsed = new Date().getTime() - start;
		console.info(`${req.method} ${req.originalUrl} ${res.statusCode} ${elapsed}ms`);
    });
};

export { authMiddleware };