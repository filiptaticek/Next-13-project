export interface IPost {
    id: number
    title: string
    content: string
    user: {
      name: string,
      image: string
    },
    comments?: {
      createdAt: string,
      content: string,
      postId: number,
      userId: number
    }[]
}