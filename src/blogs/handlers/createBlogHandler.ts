import { Blog } from "../models/blogType"
import { Request, Response } from "express"
import { HTTPStatusCode } from "../../utils/statusCodes"
import { blogsRepository } from "../blogsRepository"

export const createBlog = (req: Request, res: Response) => {

    const newBlog: Blog = blogsRepository.createBlog(req.body)

    res.status(HTTPStatusCode.CREATED).send(newBlog)
}