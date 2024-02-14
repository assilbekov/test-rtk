import { User } from "../models";
import { CreateUserRequest, CreateUserResponse } from "./users.type";

export const mockCreateUser = async (request: CreateUserRequest): Promise<CreateUserResponse> => {
  const payload: User = {
    id: Math.round(Math.random() * 1000000),
    name: request.name,
    email: request.email,
    username: request.username,
    phone: "123-456-7890",
    website: "https://www.example.com",
    address: {
      street: "123 Example St",
      suite: "Apt. 123",
      city: "Example",
      zipcode: "12345",
      geo: {
        lat: "123",
        lng: "456",
      },
    },
    company: {
      name: "Example Inc",
      catchPhrase: "Catchy phrase",
      bs: "BS",
    },
  }

  return (new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        payload,
      });
    }, 2000);
  }))
}