import React from "react";


const Child = React.memo(({ showUser }) => {
  console.log("Child is rendered.");
  return <button onClick={showUser}>Show User</button>;
});

export default Child;
