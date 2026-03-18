import { db } from "../db/db"
import { Router, Request, Response } from "express"
import { HTTPStatusCode } from "../utils/statusCodes"

export const testingRouter = Router()

testingRouter
    .delete("/all-data", (req: Request, res: Response) =>{
        db.posts = []
        db.blogs = []
        res.sendStatus(HTTPStatusCode.NO_CONTENT)
    })