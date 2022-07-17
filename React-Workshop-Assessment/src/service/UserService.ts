import { Post, User } from "../modal";
import api from "./ApiService";

export class UserService {
  static getAllUsers = async () => {
    const response = await api.get<User[]>("/users");
    return response.data;
  };

  static getAllPosts = async () => {
    const response = await api.get<Post[]>("/posts");
    return response.data;
  };

  static getPostById = async (id: number) => {
    const response = await api.get<Post[]>(`/posts?userId=${id}`);
    return response.data;
  };
}
