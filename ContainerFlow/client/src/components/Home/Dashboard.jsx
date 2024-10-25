import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [userFName, SetUserFName] = useState(null);

  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (userProfile && userProfile.firstName) {
      SetUserFName(userProfile.firstName)
    }
  }, []);

  return (
    <div className="h-40 w-full flex flex-col items-center">
      <img src="src\assets\images\ContainerFlow Logo.png" alt="Logo"
           className="w-6/12 md:w-1/5 py-8" />
      <span className="font-bold text-3xl md:text-4xl lg:text-5xl"
            style={{textShadow: "2px 2px 5px gray"}}>
        Welcome to ContainerFlow, {userFName}!
        </span>
    </div>
  );
}