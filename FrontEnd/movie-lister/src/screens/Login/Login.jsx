import React from 'react';

export default function Login() {

  const onSubmitClick = (data) => {
    console.log('onSubmitClick')
    // history.push('/signup');
  };

  const onSignUpClick = (data) => {
    console.log('onSignUpClick')
    // history.push('/signup');
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-zinc-500">
          Login
        </h1>
        <form className="mt-6">
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
            <div className="mb-2 flex justify-between">

              <label
                for="password"
                className="block text-sm font-bold text-zinc-800"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-zinc-600 hover:underline right: 19px"
              >
                Forgot Password
              </a>

            </div>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-zinc-500 bg-white border rounded-md focus:border-zinc-500 focus:ring-zinc-500 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button 
            onClick={() => {
              onSubmitClick();
            }}
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-zinc-500 rounded-md hover:bg-zinc-600 focus:outline-none focus:bg-zinc-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-zinc-500">
          ------Whats new ?--------
        </p>
        <div className="mt-6">
          <button onClick={() => {
            onSignUpClick();
          }}
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-zinc-500 rounded-md hover:bg-zinc-600 focus:outline-none focus:bg-zinc-600">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}