import React, { useEffect } from "react";
import {useLoaderData} from 'react-router-dom'

function Github() {

  const data = useLoaderData()

  // const [data, setData] = React.useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="bg-zinc-600 px-4 py-2 text-white flex flex-col gap-2">
      {data.map((comment) => (
        <div key={comment.id} className="bg-zinc-700 p-4 rounded">
          <p className="font-bold">{comment.name}</p>
          <p className="text-sm text-zinc-300">{comment.email}</p>
          <p className="text-sm">{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async() => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments?_limit=10")
    return response.json()
  }
