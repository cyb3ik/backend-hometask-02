import { db } from "../db/db"
import { BlogInputModel } from "./models/blogInputModel"
import { Blog } from "./models/blogType"

export const blogsRepository = {

    findAllBlogs: () => {

        const allBlogs = db.blogs
        return allBlogs
    },

    findBlog: (id: string) => {

        const foundBlog = db.blogs.find(a => a.id === id)
        
        return foundBlog ? foundBlog : null
    },

    createBlog: (body: BlogInputModel) => {

        const newBlog: Blog = {
            id: db.blogs.length ? `${Number(db.blogs[db.blogs.length - 1].id) + 1}` : "1",
            ...body
        }
        
        db.blogs.push(newBlog)
        
        return newBlog
    },

    updateBlog: (id: string, body: BlogInputModel) => {

        let foundBlogIndex = db.blogs.findIndex(v => v.id === id)
        
        if (foundBlogIndex === -1) {
            return false
        }

        const foundBlog: Blog = db.blogs[foundBlogIndex]
        
        foundBlog.name = body.name
        foundBlog.description = body.description
        foundBlog.websiteUrl = body.websiteUrl
        
        return true
    },

    deleteBlog: (id: string) => {

    const foundBlogIndex = db.blogs.findIndex(a => a.id === id)
    
    if (foundBlogIndex === -1) {
        return false
    }     

    else {
        db.blogs.splice(foundBlogIndex, 1)
        return true
    }
    }
}