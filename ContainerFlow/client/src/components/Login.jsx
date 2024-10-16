import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/UserProfileService.jsx";
// import forms from tailwindConfig;
// import tailwindConfig from "../../tailwind.config.js";

export default function Login({setIsLoggedIn}) {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    login({email, password})
      .then(r =>{
      if(r){
      setIsLoggedIn(true)
      navigate('/')
      }
      else{
        alert("Invalid email or password")
      }
    })
  };

  return(
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-3 md:py-8 sm:py-2 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="ContainerFlow Logo"
            src="src\assets\images\ContainerFlow Logo.png"
            className="mx-auto h-[40vh] w-auto rounded-2xl"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={loginSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-left text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                  className="block w-full pl-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="/" className="font-semibold text-yellow-800 hover:text-yellow-700">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="block w-full pl-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-yellow-800/80 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-95 hover:shadow-inner hover:shadow-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-700"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 mb-4 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a onClick={() => navigate('/register')} className="font-semibold leading-6 text-yellow-800 hover:text-yellow-700 cursor-pointer">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );

}
