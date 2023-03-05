import React from 'react';
import { redirect } from "react-router-dom";
import { useState } from 'react';


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = {
      email: email,
      password: password
    }


    const response = await fetch('/movie-list/users/signup', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6InRoaXMgYXBpIGNhbGxlZHMifQ.uqz671Y8cTqF1ivIpGVfN5p83HmRMaspBNdffOw-ZXI`,
        "Content-Type": "application/json;charset=utf-8",
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setEmail('')
      setPassword('')
      console.log('user fetched:', json)
      redirect("/movie_detail/550")
    }

  }

  const onSignUpClick = (data) => {
    console.log('onSignUpClick')
    return redirect("/login");

  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-zinc-500">
          Login
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              className="block text-sm font-bold text-zinc-800"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-zinc-500 bg-white border rounded-md focus:border-zinc-500 focus:ring-zinc-500 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <div className="mb-2 flex justify-between">

              <label
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-zinc-500 bg-white border rounded-md focus:border-zinc-500 focus:ring-zinc-500 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-zinc-500 rounded-md hover:bg-zinc-600 focus:outline-none focus:bg-zinc-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-zinc-500">
          ------Whats new ?--------
        </p>
        <div className="mt-6">
          <button
            onClick={() => {
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