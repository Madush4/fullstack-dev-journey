
import React from 'react'

function Cards({username= "Madusha",post="Not assigned here."
}) {
    // console.log(props)
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <div>
        <h1 className="bg-green-500 p-4 rounded">Vite with Tailwind</h1>

        <div className='bg-gray-800 rounded-md flex'>
          <img
            className="size-35 shadow-xl rounded-md mr-4"
            alt=""
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww"
          />
          <p>{username}Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>
    </div>
  );
}

export default Cards