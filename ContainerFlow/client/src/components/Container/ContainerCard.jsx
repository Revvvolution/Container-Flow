import React, { useEffect, useState } from "react";
import { Menu, Transition, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { TagIcon } from '@heroicons/react/24/outline';
import { GiBoxUnpacking } from 'react-icons/gi';
import { Fragment } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteContainer } from "../../services/ContainerService.jsx";
import { SuccessModal } from "../Modal/SuccessModal.jsx";
import { ContainerModal } from "./ContainerModal.jsx";
import { getItemsByContainerId } from "../../services/ItemService.jsx";
import { getTagById } from "../../services/TagService.jsx";



export const ContainerCard = ({ container }) => {

    const [showContainerModal, setShowContainerModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [itemsForContainer, setItemsForContainer] = useState([]);
    const [tagsForContainerItems, setTagsForContainerItems] = useState([]);


    useEffect(() => {
        if (container.id) {
            getItemsByContainerId(container.id)
            .then(async (containerObj) => {
              setItemsForContainer(containerObj);
              const tagIds = containerObj.map((item) => item.tagId);
              const uniqueTagIds = Array.from(new Set(tagIds));
              const tagPromises = uniqueTagIds.map((tagId) => getTagById(tagId));
              const tagObjects = await Promise.all(tagPromises);
              setTagsForContainerItems(tagObjects);
            })
            .catch((error) => {
              console.error("Error fetching items or tags:", error);
            });
        }
      }, [container]);

    const handleDelete = () => {
        deleteContainer(container.id).then(() => {
            setShowContainerModal(false);
            setShowSuccessModal(true);
        });
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        window.location.reload();
    };


    return (
        <>
        <li key={container.id} 
        className={`relative flex items-center justify-between ${itemsForContainer.length > 0 ? ("bg-gradient-to-tr from-yellow-800/70 via-yellow-800/90 to-slate-300/90") : ("bg-gradient-to-tr from-slate-700/30 via-slate-700/50 to-slate-700/30")} p-2 mb-2 rounded shadow-lg shadow-slate-800/60 h-60`}
        >
        <div className="flex flex-col text-center border-2 w-full leading-9 h-40 justify-around">
            <span className="text-slate-950 text-xl font-bold">{container.name}</span>
            <span className="text-slate-950">{container.description}</span>
            <div className="flex justify-around items-center mx-4 bg-transparent">
            <>
                {tagsForContainerItems.map((tag) => (
                <span key={tag.id} className="text-xs bg-gray-300/70 rounded-full px-2 py-1 mx-1 flex justify-center items-center">
                    <TagIcon className="inline-block w-5 h-5 mr-1" />{tag.name}
                </span>
                ))}
            </>
          </div>
        </div>
        <span className="absolute bottom-2 left-2.5 md:text-lg">
            {itemsForContainer ? (
            <>{"Total Items: "} <span className="font-bold">{itemsForContainer.length}</span></> ) : ("") }
        </span>  
            <Menu as="div" className="absolute top-2 right-2 z-10 inline-block text-left">
                <MenuButton className="inline-flex justify-center w-full rotate-90 rounded-lg p-1 text-sm font-medium text-gray-900 hover:bg-gray-300 hover:text-gray-500 hover:shadow-inner hover:shadow-black focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-opacity-75">
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
                            <Link to={`/containers/details/${container.id}`}>
                                <MenuItem as="button" className="bg-slate-700/70 text-white md:bg-inherit mb-1 md:bg-none md:text-gray-900 hover:bg-slate-700/70 hover:text-white group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                    Details
                                </MenuItem>
                            </Link>

                            <Link to={`/containers/edit/${container.id}`}>
                                <MenuItem as="button" className="bg-blue-700/70 text-white md:bg-inherit mb-1 md:bg-none md:text-gray-900 hover:bg-blue-700/70 hover:text-white group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                    Edit
                                </MenuItem>
                            </Link>
                                <MenuItem as="button" 
                                className="bg-red-700/90 text-white md:text-gray-900 md:bg-inherit hover:bg-red-700/90 hover:text-white group flex rounded-md items-center w-full px-2 py-2 text-sm"
                                onClick={() => setShowContainerModal(true)}>
                                    Delete
                                </MenuItem>
                        </div>
                    </MenuItems>
                </Transition>
            </Menu>
        </li>
            <ContainerModal
                show={showContainerModal}
                onClose={() => setShowContainerModal(false)}
                onConfirm={handleDelete}
            />
            <SuccessModal
                show={showSuccessModal}
                onClose={handleCloseSuccessModal}
                title={"Success"}
                message={"Container deleted successfully."}
            />
        </>
    );
};
