import React, { useEffect, useState } from "react";
import { Menu, Transition, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { TagIcon } from '@heroicons/react/24/outline';
import { GiBoxUnpacking } from 'react-icons/gi';
import { Fragment } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteItem } from "../../services/ItemService.jsx";
import { SuccessModal } from "../Modal/SuccessModal.jsx";
import { ItemModal } from "./ItemModal.jsx";
import { getTagById } from "../../services/TagService.jsx";


export const ItemCard = ({ item }) => {

    const [showItemModal, setShowItemModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
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

    const handleDelete = () => {
        deleteItem(item.id).then(() => {
            setShowItemModal(false);
            setShowSuccessModal(true);
        });
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        window.location.reload();
    };

    return (
        <>
        <li key={item.id} className={`relative flex items-center justify-between ${item.containerId ? "bg-gradient-to-tr from-slate-300/90 via-emerald-600/90 to-slate-300/80" : "bg-gradient-to-tr from-slate-700/30 via-slate-700/50 to-slate-700/30"} p-2 mb-2 rounded shadow-lg shadow-slate-800/60 h-60`}>
        {item.containerId && <GiBoxUnpacking className="absolute top-2 left-2 w-5 h-5 mr-1" />}
        <div className="flex flex-col text-center border-2 w-full leading-9 h-40 justify-around">
            <span className="text-slate-950 text-xl font-bold">{item.name}</span>
            <span className="text-slate-950">{item.description}</span>
        </div>
        <span className="absolute bottom-2 right-2.5">
            {tagForItem.name ? (
            <><TagIcon className="inline-block w-5 h-5 mr-1" /> {tagForItem.name}</> ) : ("") }
        </span>  
            <Menu as="div" className="absolute top-2 right-2 z-10 inline-block text-left">
                <MenuButton className="inline-flex justify-center w-full rotate-90 rounded-md p-1 text-sm font-medium text-gray-900 hover:bg-gray-300/30 hover:shadow-inner hover:shadow-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <EllipsisVerticalIcon className="w-5 h-5" aria-hidden="true" />
                </MenuButton>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="absolute right-0 mt-2 w-20 md:w-40 origin-top-right rounded-xl bg-transparent md:bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                        <div className="flex flex-col border-none md:border-slate-700/50 rounded-xl">
                            <Link to={`/items/edit/${item.id}`}>
                                <MenuItem as="button" className="bg-blue-700/70 text-white md:bg-inherit mb-1 md:bg-none md:text-gray-900 hover:bg-blue-700/70 hover:text-white group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                    Edit
                                </MenuItem>
                            </Link>
                                <MenuItem as="button" 
                                className="bg-red-700/90 text-white md:text-gray-900 md:bg-inherit hover:bg-red-700/90 hover:text-white group flex rounded-md items-center w-full px-2 py-2 text-sm"
                                onClick={() => setShowItemModal(true)}>
                                    Delete
                                </MenuItem>
                        </div>
                    </MenuItems>
                </Transition>
            </Menu>
        </li>
            <ItemModal
                show={showItemModal}
                onClose={() => setShowItemModal(false)}
                onConfirm={handleDelete}
            />
            <SuccessModal
                show={showSuccessModal}
                onClose={handleCloseSuccessModal}
                title={"Success"}
                message={"Item deleted successfully."}
            />
        </>
    );
};
