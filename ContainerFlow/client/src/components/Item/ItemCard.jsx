import React, { useState } from "react";
import { Menu, Transition, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteItem } from "../../services/ItemService.jsx";
import { SuccessModal } from "../Modal/SuccessModal.jsx";
import { ItemModal } from "./ItemModal.jsx";

export const ItemCard = ({ item }) => {

    const [showItemModal, setShowItemModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

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
        <li key={item.id} className="relative flex items-center justify-between bg-slate-700/30 p-2 mb-2 rounded shadow-lg shadow-slate-800/60 h-60">
        <div className="flex flex-col text-center border-2 w-full leading-9 h-40 justify-around">
            <span className="text-slate-950 text-xl font-bold">{item.name}</span>
            <span className="text-slate-950">{item.description}</span>
        </div>    
            <Menu as="div" className="absolute top-2 right-2 z-10 inline-block text-left">
                <MenuButton className="inline-flex justify-center w-full rotate-90 rounded-md bg-slate-700/30 p-1 text-sm font-medium text-gray-100 hover:bg-gray-200 hover:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
                        <div className="flex flex-col border-2 md:border-slate-700/50 rounded-xl">
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
