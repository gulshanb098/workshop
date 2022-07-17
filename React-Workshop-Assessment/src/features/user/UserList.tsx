import { useSnapshot } from "valtio";
import { UserState } from "../../store";
import UserItem from "./UserItem";

const UserList = () => {
  const { userList } = useSnapshot(UserState);
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Users</h2>
      {userList.map((e) => (
        <UserItem user={e} />
      ))}
    </div>
  );
}

export default UserList;