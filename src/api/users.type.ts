import { User } from "../models";

export type CreateUserRequest = {
  name: string;
  username: string;
  email: string;
}

export type CreateUserResponse = {
  payload: User;
}