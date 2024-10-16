import React from "react";
import { Menu, Transition, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";

export const TagCard = ({ tag }) => {
    return (
        <li key={tag.id} className="flex items-center justify-between bg-gray-100 p-2 mb-2 rounded shadow-lg shadow-slate-800/60">
            <span className="text-slate-950">{tag.name}</span>
            <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="inline-flex justify-center w-full rounded-md bg-gray-100 p-1 text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
                            <Link to={`/tags/edit/${tag.id}`}>
                                <MenuItem as="button" className="bg-blue-700/70 text-white md:bg-inherit mb-1 md:bg-none md:text-gray-900 hover:bg-blue-700/70 hover:text-white group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                    Edit
                                </MenuItem>
                            </Link>
                                <MenuItem as="button" className="bg-red-700/90 text-white md:text-gray-900 md:bg-inherit hover:bg-red-700/90 hover:text-white group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                    Delete
                                </MenuItem>
                        </div>
                    </MenuItems>
                </Transition>
            </Menu>
        </li>
    );
};