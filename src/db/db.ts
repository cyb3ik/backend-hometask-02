import { Post } from "../posts/models/postType"
import { Blog } from "../blogs/models/blogType"

export const db: { posts: Post[], blogs: Blog[] } = {
  posts: [
    {
      id: "0",
      title: "some post",
      shortDescription: "some post description",
      content: "some content",
      blogId: "0",
      blogName: "cool blog",
    }
  ],
  
  blogs: [
    {
      id: "0",
      name: "cool blog",
      description: "some blog description",
      websiteUrl: "https://it-incubator.io"
    }
  ]
}