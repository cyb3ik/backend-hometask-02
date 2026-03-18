import { db } from "../db/db"
import { PostInputModel } from "./models/postInputModel"
import { Post } from "./models/postType"

export const postsRepository = {

    findAllPosts: () => {

        const allPosts = db.posts
        return allPosts
    },

    findPost: (id: string) => {

        const foundPost = db.posts.find(a => a.id === id)
        
        return foundPost ? foundPost : null
    },

    createPost: (body: PostInputModel) => {

        const newPost: Post = {
            id: db.posts.length ? `${Number(db.posts[db.posts.length - 1].id) + 1}` : "1",
            blogName: "blog",
            ...body
        }
        
        db.posts.push(newPost)
        
        return newPost
    },

    updatePost: (id: string, body: PostInputModel) => {

        let foundPostIndex = db.posts.findIndex(v => v.id === id)
        
        if (foundPostIndex === -1) {
            return false
        }
            
        const foundPost: Post = db.posts[foundPostIndex]
        
        foundPost.shortDescription = body.shortDescription
        foundPost.content = body.content
        foundPost.blogId = body.blogId
        foundPost.title = body.title
        
        return true
    },

    deletePost: (id: string) => {

    const foundPostIndex = db.posts.findIndex(a => a.id === id)
    
    if (foundPostIndex === -1) {
        return false
    }     

    else {
        db.posts.splice(foundPostIndex, 1)
        return true
    }
    }
}