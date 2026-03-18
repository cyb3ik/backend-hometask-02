import { Request, Response } from "express"
import { HTTPStatusCode } from "../../utils/statusCodes"
import { postsRepository } from "../postsRepository"

export const readAllPosts = (req: Request, res: Response) => {

    const allPosts = postsRepository.findAllPosts()

    res.status(HTTPStatusCode.OK).send(allPosts)
}