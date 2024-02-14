import { Post } from "../models";

export type CreatePostRequest = {
  title: string;
  body: string;
  userId: number;
}

export type CreatePostResponse = {
  payload: Post
}