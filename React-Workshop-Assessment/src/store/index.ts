import { proxy } from "valtio";
import { Post, User } from "../modal";

interface UserStateType {
  userList: User[];
  postList: Post[];
  isSelected: number;
  selectedName: string;
  selectedEmail: string;
}

export const UserState = proxy<UserStateType>({
  userList: [],
  postList: [],
  isSelected: 0,
  selectedName: "",
  selectedEmail: "",
});
