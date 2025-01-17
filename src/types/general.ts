export interface Params {
    params: Promise<{ 
      id: string
    }>
  }
export interface Post {
    _id: string
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
}