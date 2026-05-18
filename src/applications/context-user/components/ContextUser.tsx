import { useContext } from "react";
import { UserContext } from "../../../context/UserProvider";

const ContextUser = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <p>{user?.name}</p>
      <p>{user?.age}</p>
    </div>
  );
};

export default ContextUser;
