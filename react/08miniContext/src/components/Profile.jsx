import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Not logged in</h1>;
  return (
    <div>
      <div>
        Profile: {user.username}
        <h2>More Component</h2>
      </div>
    </div>
  );
}

export default Profile;
