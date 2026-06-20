import React from 'react'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-800 min-h-s
     w-full mx-auto">
      <section className="text-center bg-green-200  shadow w-full p-3 text-gray-00 text-xs font-bold">
        <p>Experience the best products and services tailored just for you.</p>
      </section>
      <div>
        <h1 className="text-4xl font-bold text-white mt-10">
          Welcome to Our Store
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-gray-700 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Quality Products
          </h2>
          <p className="text-gray-300">
            Discover a wide range of high-quality products that meet your needs
            and exceed your expectations.
          </p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Exceptional Service
          </h2>
          <p className="text-gray-300">
            Our dedicated team is here to provide you with exceptional service
            and support every step of the way.
          </p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Fast Shipping
          </h2>
          <p className="text-gray-300">
            Enjoy fast and reliable shipping on all orders, ensuring your
            products arrive quickly and safely.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home