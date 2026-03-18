import { FieldError } from "./errorType";

export const createErrorsMessages = (errors: FieldError[], ): { errorsMessages: FieldError[] } => {
    return { errorsMessages: errors }
}

export const TESTING_PATH = '/ht_02/api/testing';
export const BLOGS_PATH = '/ht_02/api/blogs';
export const POSTS_PATH = '/ht_02/api/posts';
