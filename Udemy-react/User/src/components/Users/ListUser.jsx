import classes from "./ListUser.module.css";
import Card from "../UI/Card";

const ListUser = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} ans)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ListUser;
