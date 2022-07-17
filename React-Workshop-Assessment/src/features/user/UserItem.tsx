import { User } from "../../modal";
import ListGroup from "react-bootstrap/ListGroup";
import StateManager from "../../manager/StateManager";
import { useSnapshot } from "valtio";
import { UserState } from "../../store";

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  const { selectedName } = useSnapshot(UserState);

  const handleClick = (user: User) => {
    const { id, name, email } = user;
    StateManager.setSelected(id);
    StateManager.setSelectedName(name);
    StateManager.setSelectedEmail(email);
  };

  return (
    <div>
      <ListGroup as="ul">
        <ListGroup.Item
          as="li"
          style={{ cursor: "pointer", backgroundColor: selectedName===user.name ? 'rgb(255, 255, 0)' : 'white'  }}
          onClick={() => handleClick(user)}
        >
          {user.name}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default UserItem;
