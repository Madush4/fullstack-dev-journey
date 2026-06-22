import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className='w-full bg-zinc-700'>
      <div className="flex py-6 px-1  max-w-5xl justify-between mx-auto">
        <section className="flex flex-col  text-sm text-gray-300 ">
          <p>© 2024 Your Company. All rights reserved.</p>
          <p>Madusha Damith</p>
        </section>
        <section className="flex flex-col  text-sm text-gray-300 ">
          <p>© 2024 Your Company. All rights reserved.</p>
          <p>Madusha Damith - 20200394 -</p>
        </section>
      </div>
    </div>
  );
}

export default Footer;
