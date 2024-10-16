import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { logout } from "../services/UserProfileService.jsx";
import { useNavigate } from "react-router-dom";

export default function Header(setIsLoggedIn) {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    window.location.reload(true);
  }

  return (
    <header className="sm:bg-none flex flex-row items-center justify-between border-4 border-yellow-800/40 w-[100vw] px-1 mt-0.5 bg-gradient-to-b from-cyan-600/75 via-cyan-700/90 to-zinc-500/90 md:h-20 md:bg-cyan-600 sm:justify-around col-span-2 p-2 border-b-2 -z-10">
            <a
                href="/"
                className="absolute left-4 top-4 md:top-6 flex items-center h-10 px-10 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90 hover:shadow-[0_10px_30px_5px_rgba(255,255,255,0.2)]"
            >
                ContainerFlow
            </a>
      <nav className="hidden sm:flex justify-between items-center gap-8 sm:font-semibold md:text-xl">
        <a href="/" className="hover:text-gray-200">
          Home
        </a>
        <a href="/" className="hover:text-gray-200">
          Containers
        </a>
        <a href="/" className="hover:text-gray-200">
          Items
        </a>
        <a href="/" className="hover:text-gray-200">
          Tags
        </a>
        <a href="/" className="hover:text-gray-200">
          Account
        </a>
        <div className="absolute right-4"
            onClick={handleLogout}
                >
                <span className="border-2 py-1 px-1 rounded-lg bg-slate-300 shadow-inner shadow-black cursor-pointer hover:opacity-90"
                >Logout</span>
        </div>
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-200"
        >
          {showMenu ? <GrClose className="mt-2 absolute right-4 size-8" /> : <GiHamburgerMenu className="absolute right-4 size-8"/>}
        </button>
        {showMenu && (
          <>
            <a href="/" className="text-emerald-100 hover:shadow-lg hover:shadow-black mt-14 pb-2 border-b-2 border-b-slate-950/50 w-[100vw]">
                Home
            </a>
            <a href="/" className="text-emerald-100 hover:shadow-lg hover:shadow-black mt-1 pb-2 border-b-2 border-b-slate-950/50 w-[100vw]">
                Containers
            </a>
            <a href="/" className="text-emerald-100 hover:shadow-lg hover:shadow-black mt-1 pb-2 border-b-2 border-b-slate-950/50 w-[100vw]">
                Items
            </a>
            <a href="/" className="text-emerald-100 hover:shadow-lg hover:shadow-black mt-1 pb-2 border-b-2 border-b-slate-950/50 w-[100vw]">
                Tags
            </a>
            <a href="/" className="text-emerald-100 hover:shadow-lg hover:shadow-black mt-1 pb-2 border-b-2 border-b-slate-950/50 w-[100vw]">
                Account
            </a>
            <a className="hover:text-gray-200 pb-2 pt-2 w-[100vw]">
                <span className="border-2 py-1 px-1 rounded-lg bg-slate-300 shadow-inner shadow-black font-black"
                    onClick={handleLogout}
                >Logout</span>
            </a>
          </>
        )}
      </nav>
    </header>
  );
}
