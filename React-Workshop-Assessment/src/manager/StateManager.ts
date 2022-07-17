import { Post, User } from "../modal";
import { UserState } from "../store";

export default class StateManager {
  static setUsers = async (userList: User[]) => {
    UserState.userList = userList;
  };

  static setPosts = async (postList: Post[]) => {
    UserState.postList = postList;
  };

  static setSelected = async (id: number) => {
    UserState.isSelected = id;
  };

  static setSelectedName = async (name: string) => {
    UserState.selectedName = name;
  };

  static setSelectedEmail = async (email: string) => {
    UserState.selectedEmail = email;
  };
}
