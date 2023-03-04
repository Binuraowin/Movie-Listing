import React from 'react';

export default function Register() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-zinc-500">
          Sign Up
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="first_name"
              className="block text-sm font-bold text-zinc-800"
            >
              Firt Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-zinc-500 bg-white border rounded-md focus:border-zinc-500 focus:ring-zinc-500 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
          <label
              for="last_name"
              className="block text-sm font-bold text-zinc-800"
            >
              Last Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-zinc-500 bg-white border rounded-md focus:border-zinc-500 focus:ring-zinc-500 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
          <label
              for="email"
              className="block text-sm font-bold text-zinc-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-zinc-500 bg-white border rounded-md focus:border-zinc-500 focus:ring-zinc-500 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-bold text-zinc-800"
              >
                Password
              </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-zinc-500 bg-white border rounded-md focus:border-zinc-500 focus:ring-zinc-500 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-bold text-zinc-800"
              >
                Confirm Password
              </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-zinc-500 bg-white border rounded-md focus:border-zinc-500 focus:ring-zinc-500 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-zinc-500 rounded-md hover:bg-zinc-600 focus:outline-none focus:bg-zinc-600">
            Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}