import { NextFunction, Request, Response } from 'express'
import { HTTPStatusCode } from '../utils/statusCodes';
 
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'qwerty'
 
export const authGuardMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers['authorization'] as string

    if (!auth) {
        res.sendStatus(HTTPStatusCode.UNAUTHORIZED)
        return
    }
 
    const [authType, token] = auth.split(' ')
    if (authType !== 'Basic') {
        res.sendStatus(HTTPStatusCode.UNAUTHORIZED)
        return;
    }
 
    const credentials = Buffer.from(token, 'base64').toString('utf-8')
    const [username, password] = credentials.split(':')
 
    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
        res.sendStatus(HTTPStatusCode.UNAUTHORIZED)
        return
    }
 
  next()
}