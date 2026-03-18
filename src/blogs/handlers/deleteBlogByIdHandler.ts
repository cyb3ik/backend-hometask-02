import { Request, Response } from "express"
import { HTTPStatusCode } from "../../utils/statusCodes"
import { blogsRepository } from "../blogsRepository"
import { createErrorsMessages } from "../../utils/utils"

export const deleteBlogById = (req: Request, res: Response) => {
    
    const isDeleted = blogsRepository.deleteBlog(String(req.params.id))

    if (!isDeleted) {
        res.status(HTTPStatusCode.NOT_FOUND)
            .send(createErrorsMessages([{ message: 'Blog not found', field: 'id' }]))
    }
    else {
        res.sendStatus(HTTPStatusCode.NO_CONTENT)
    }
}