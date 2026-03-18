import { Request, Response } from "express"
import { HTTPStatusCode } from "../../utils/statusCodes"
import { blogsRepository } from "../blogsRepository"

export const readAllBlogs = (req: Request, res: Response) => {

    const allBlogs = blogsRepository.findAllBlogs()

    res.status(HTTPStatusCode.OK).send(allBlogs)
}