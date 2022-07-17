import { useEffect } from "react";
import UserManager from "../../manager/UserManager";
import PostComponent from "../posts/PostComponent";
import UserList from "./UserList";

const UserScreen = () => {
  const loadData = async () => {
    await UserManager.getAll();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
    <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>React Workshop Assessment</h1>   
    <div style={{ display:'flex', 'flexDirection':'row', margin: 30 }}>     
        <UserList />
        <PostComponent />
    </div>
    </>
  );
}

export default UserScreen;
