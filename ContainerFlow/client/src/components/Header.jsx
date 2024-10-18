import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { logout } from "../services/UserProfileService.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [userProfileId, setUserProfileId] = useState();
  
  const userProfile = JSON.parse(localStorage.getItem('userProfile'));
  const userId = userProfile ? parseInt(userProfile.id) : '';

  const navigate = useNavigate();


  useEffect(() => {
    setUserProfileId(userId);
  }, [userId])
  

  const handleLogout = () => {
    logout();
    window.location.reload(true);
  }

  return (
    <div className="h-10 md:h-fit mb-3">
    <header className="relative flex flex-row items-center justify-between border-4 border-yellow-800/40 w-[100vw] h-full px-1 mt-0.2 bg-gradient-to-b from-cyan-600/75 via-cyan-700/90 to-zinc-500/90 md:h-20 md:bg-cyan-600 sm:justify-around col-span-2 p-2 border-b-2 z-10">
            <Link
                to={"/"}
                className="hidden absolute left-4 top-2 md:top-4 md:flex items-center h-10 px-10 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90 hover:shadow-[0_10px_30px_5px_rgba(255,255,255,0.2)]"
            >
                ContainerFlow
            </Link>
      <nav className="hidden sm:flex justify-between items-center gap-8 sm:font-semibold md:text-xl">
        <Link to={"/"} className="hover:text-gray-200">
          Home
        </Link>
        <Link to={`/containers/${userProfileId}`} className="hover:text-gray-200">
          Containers
        </Link>
        <Link to={`/items/${userProfileId}`} className="hover:text-gray-200">
          Items
        </Link>
        <Link to={`/tags/${userProfileId}`} className="hover:text-gray-200">
          Tags
        </Link>
        <Link to={"/"} className="hover:text-gray-200">
          Account
        </Link>
        <Link to={"/"}>
        <div className="absolute right-4 top-6"
                >
                <span className="border-2 py-1 px-1 rounded-lg bg-slate-300 shadow-inner shadow-black cursor-pointer hover:opacity-90"
                onClick={handleLogout}
                >Logout</span>
        </div>
        </Link>
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 mt-40 w-full font-semibold bg-gradient-to-b from-cyan-600/75 via-cyan-700/90 to-zinc-500/90 z-30">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-200"
        >
          {showMenu ? <GrClose className="mt-2 absolute right-6 top-0.5 size-8" /> : <GiHamburgerMenu className="absolute right-6 top-0.5 size-8"/>}
        </button>
        {showMenu && (
          <>
            <Link to={"/"} onClick={() => setShowMenu(!showMenu)} className="text-emerald-100 hover:shadow-lg hover:shadow-black mt-20 pb-2 border-b-2 border-b-slate-950/50 w-[100vw]">
                Home
            </Link>
            <Link to={`/containers/${userProfileId}`} onClick={() => setShowMenu(!showMenu)} className="text-emerald-100 hover:shadow-lg hover:shadow-black mt-1 pb-2 border-b-2 border-b-slate-950/50 w-[100vw]">
                Containers
            </Link>
            <Link to={`/items/${userProfileId}`} onClick={() => setShowMenu(!showMenu)} className="text-emerald-100 hover:shadow-lg hover:shadow-black mt-1 pb-2 border-b-2 border-b-slate-950/50 w-[100vw]">
                Items
            </Link>
            <Link to={`/tags/${userProfileId}`} onClick={() => setShowMenu(!showMenu)} className="text-emerald-100 hover:shadow-lg hover:shadow-black mt-1 pb-2 border-b-2 border-b-slate-950/50 w-[100vw]">
                Tags
            </Link>
            <Link to={"/"} onClick={() => setShowMenu(!showMenu)} className="text-emerald-100 hover:shadow-lg hover:shadow-black mt-1 pb-2 border-b-2 border-b-slate-950/50 w-[100vw]">
                Account
            </Link>
            <Link to={"/"} className="hover:text-gray-200 pb-2 pt-2 w-[100vw]">
                <span className="border-2 py-1 px-1 rounded-lg bg-slate-300 shadow-inner shadow-black font-black"
                    onClick={handleLogout}
                >Logout</span>
            </Link>
          </>
        )}
      </nav>
    </header>
    </div>
  );
}
