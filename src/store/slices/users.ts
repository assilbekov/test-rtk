import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { User } from "../../models"

export const usersApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/users" }),
  reducerPath: "usersApi",
  tagTypes: ["Users"],
  endpoints: build => ({
    getUsers: build.query<User[], number>({
      query: (limit = 10) => `?limit=${limit}`,
      providesTags: (result, error, id) => [{ type: "Users", id }],
    }),
    getUser: build.query<User, number>({
      query: id => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Users", id }],
    }),
  }),
});


export const { useGetUserQuery, useGetUsersQuery } = usersApiSlice
