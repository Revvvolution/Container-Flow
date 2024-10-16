import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../services/UserProfileService.jsx";

export default function Register({setIsLoggedIn}) {
    const navigate = useNavigate();

    const [displayName, setDisplayName] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password_confirmation, setPassword_confirmation] = useState();

    const registerClick = (e) => {
        e.preventDefault();
        if (password && password !== password_confirmation) {
          alert("Passwords don't match. Do better.");
        } else {
          const userProfile = { 
            displayName: displayName, 
            firstName: firstName, 
            lastName: lastName, 
            email: email,
           }
          try {
          register(userProfile, password)
            .then(() => {
              setIsLoggedIn(true)
              navigate('/')
            });
          } catch (error) {
            console.error("There was an error while trying to register:", error);
          }
        }
     };

     return(
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <img
                            alt="ContainerFlow Logo"
                            src="src\assets\images\ContainerFlow Logo.png"
                            className="mx-auto h-[40vh] w-auto rounded-2xl"
                        />
                    </a>
                    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-normal text-gray-900">
                            Register
                    </h2>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-zinc-700/20 shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={registerClick}>
                        <div className="mt-2">
                            <label
                                htmlFor="firstName"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                First Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    onChange={e => setFirstName(e.target.value)}
                                    autoComplete="firstName"
                                    className="block w-full mt-1 pl-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="lastName"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Last Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    onChange={e => setLastName(e.target.value)}
                                    autoComplete="lastName"
                                    className="block w-full mt-1 pl-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="displayName"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Display Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="displayName"
                                    required
                                    onChange={e => setDisplayName(e.target.value)}
                                    autoComplete="displayName"
                                    className="block w-full mt-1 pl-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                    autoComplete="email"
                                    className="block w-full mt-1 pl-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={e => setPassword(e.target.value)}
                                    autoComplete="password"
                                    className="block w-full mt-1 pl-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    onChange={e => setPassword_confirmation(e.target.value)}
                                    autoComplete="password"
                                    className="block w-full mt-1 pl-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}