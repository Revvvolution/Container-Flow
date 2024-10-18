import React, { useEffect, useState } from "react";
import { TagIcon } from '@heroicons/react/24/outline';
import { GiBoxUnpacking } from 'react-icons/gi';
import { getTagById } from "../../services/TagService.jsx";

export const ContainerItemCard = ({ item, onRemove }) => {
    const [tagForItem, setTagForItem] = useState({});

    useEffect(() => {
        if (item.tagId) {
            getTagById(item.tagId)
                .then((itemObj) => {
                    setTagForItem(itemObj);
                })
                .catch((error) => {
                    console.error("Error fetching tag:", error);
                });
        }
    }, [item]);

    return (
        <li key={item.id} className="relative flex flex-col items-center justify-around bg-gradient-to-tr from-slate-300/90 via-emerald-600/90 to-slate-300/80 p-4 rounded shadow-inner shadow-slate-800/60 w-60 h-60 lg:w-80 lg:h-80 flex-wrap">
            {/* {item.containerId && <GiBoxUnpacking className="absolute top-2 left-2 w-5 h-5" />} */}
            <div className="flex flex-col text-center leading-9 h-full justify-evenly">
                <span className="text-slate-950 text-xl font-bold">{item.name}</span>
                <span className="text-slate-950">{item.description}</span>
            </div>
            <span className="absolute bottom-2 right-2.5">
                {tagForItem.name ? (<><TagIcon className="inline-block w-5 h-5 mr-1" /> {tagForItem.name}</>) : ("")}
            </span>
            <button onClick={() => onRemove(item.id)} className="absolute top-2 right-2.5 w-8 md:w-20 md:h-7 flex justify-center items-center bg-red-700/70 text-slate-200 px-2 py-1 rounded sm:text-lg md:px-4 md:py-2 md:text-base hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                <span className="block md:hidden">-</span>
                <span className="hidden md:block">Remove</span>
            </button>
        </li>
    );
};