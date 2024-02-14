import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Post} from "../../models";

export const postsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/posts" }),
  reducerPath: "posts",
  tagTypes: ["Posts"],
  endpoints: build => ({
    getPosts: build.query<Post[], undefined>({
      query: () => "",
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Posts', id }) as const),
        { type: 'Posts' as const, id: 'LIST' },
      ],
    }),
    getPost: build.query<Post, number>({
      query: id => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Posts", id }],
    }),
    createPost: build.mutation({
      query: post => ({
        url: "",
        method: "POST",
        body: post,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
  }),
});

export const { useGetPostQuery, useGetPostsQuery, useCreatePostMutation } = postsApiSlice;
