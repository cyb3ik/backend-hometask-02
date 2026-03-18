import { Post } from "../models/postType"
import { db } from "../../db/db"
import { Request, Response } from "express"
import { HTTPStatusCode } from "../../utils/statusCodes"
import { postsRepository } from "../postsRepository"

export const createPost = (req: Request, res: Response) => {

    const newPost: Post = postsRepository.createPost(req.body)

    res.status(HTTPStatusCode.CREATED).send(newPost)
}