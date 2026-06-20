import React from "react";


function Home() {
  return (
    <div className="max-w-5xl">
      <section className="flex justify-center items-center py-24 flex-col gap-6">
        <span className="text-xs border border-zinc-700 text-zinc-400 px-4 py-1 rounded-full ">
          Software Enginner
        </span>

        <h1 className="font-bold md:text-4xl text-xl">
          Building Things For{" "}
          <span className="text-amber-200 md:text-5xl text-2xl">Future</span>
        </h1>
        <h1 className="font-bold text-xl md:text-4xl">
          With{" "}
          <span className="text-2xl md:text-5xl text-amber-200">
            Magical Designs
          </span>
        </h1>
        <p className="text-zinc-400 text-base max-w-xl text-center">
          I'm Madush, a full-stack developer and CS undergrad from Sri Lanka,
          building real products with React, Node.js, and a growing interest in
          AI.
        </p>
        <div className="flex items-center justify-between w-64">
          <span>GitHub</span>
          <span>LinkedIn</span>
        </div>
      </section>
      <section className="flex flex-col items-center gap-4 py-10 border-t border-zinc-800">
        <p>Technologies I Work With</p>
        <div className="flex gap-8 text-zinc-500 text-sm ">
          <span>React</span>
          <span>Node.js</span>
          <span>My SQL</span>
          <span>Tailwind</span>
          <span>React Native</span>
          <span>Next.js</span>
        </div>
      </section>
    </div>
  );
}

export default Home;
