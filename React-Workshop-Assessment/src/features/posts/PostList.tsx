import { ListGroup } from "react-bootstrap";
import { useSnapshot } from "valtio";
import { UserState } from "../../store";
import PostItem from "./PostItem";

const PostList = () => {
  const { postList } = useSnapshot(UserState);

  return (
    <div>
      <ListGroup as="ul" style={{ border: '2px solid black', backgroundColor: 'rgb(65,224,253)' }}>
      {postList.map((e) => (
        <PostItem post={e} />
      ))}
      </ListGroup>
    </div>
  );
}

export default PostList;
