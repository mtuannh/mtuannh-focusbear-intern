import { useEffect, useState } from "react";
import { getUser } from "../api/getUser.cjs";

function UserCard() {
  const [name, setName] = useState("");

  useEffect(() => {
    getUser().then((user) => setName(user.name));
  }, []);

  if (!name) {
    return <p>Loading...</p>;
  }

  return <p>{name}</p>;
}

export default UserCard;
