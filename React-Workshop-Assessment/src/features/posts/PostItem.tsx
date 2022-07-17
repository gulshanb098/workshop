import { ListGroup } from "react-bootstrap";
import { Post } from "../../modal";

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <>
    <div>
        <ListGroup.Item as="li">Post ID: {post.id}</ListGroup.Item>
        <ListGroup.Item>User ID: {post.userId}</ListGroup.Item>
        <ListGroup.Item>Title: {post.title}</ListGroup.Item>
        <ListGroup.Item>Description: {post.body}</ListGroup.Item> 
    </div>
    <hr />
    </>
  );
}

export default PostItem;
