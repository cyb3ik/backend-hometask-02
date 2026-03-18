import { Request, Response } from "express"
import { HTTPStatusCode } from "../../utils/statusCodes"
import { blogsRepository } from "../blogsRepository"
import { Blog } from "../models/blogType"
import { createErrorsMessages } from "../../utils/utils"

export const readBlogById = (req: Request, res: Response) => {

    const foundBlog: Blog | null = blogsRepository.findBlog(String(req.params.id))
    
    if (!foundBlog) {
        res.status(HTTPStatusCode.NOT_FOUND)
            .send(createErrorsMessages([{ message: 'Blog not found', field: 'id' }]))
    } 
    else {
        res.status(HTTPStatusCode.OK).send(foundBlog)
    }
}