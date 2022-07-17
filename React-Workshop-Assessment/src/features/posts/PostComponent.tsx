import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { UserState } from "../../store";
import UserManager from "../../manager/UserManager";
import PostList from "./PostList";

const PostComponent = () => {
  const { isSelected, selectedName, selectedEmail } = useSnapshot(UserState);

  useEffect(() => {
    const loadData = async () => {
      if (isSelected === 0) {
        await UserManager.getAllPosts();
      } else {
        await UserManager.getPostsById(isSelected);
      }
    };
    loadData();
  }, [isSelected]);

  return (
    <div>
      {isSelected !== 0 && <h2 style={{ textAlign: 'center' }}> Selected User: {selectedName} || Email: {selectedEmail}</h2>}
      <h2 style={{ textAlign: 'center' }}>All posts {isSelected === 0 ? "" : `by ${selectedName}`}</h2>
      <PostList />
    </div>
  );
}

export default PostComponent;
