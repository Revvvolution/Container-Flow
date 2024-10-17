import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addItem } from "../../services/ItemService.jsx";
import { useParams } from 'react-router-dom';
import { SuccessModal } from "../Modal/SuccessModal.jsx";
import { getAllUserTags } from "../../services/TagService.jsx";


export const ItemCreate = () => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemTagId, setItemTagId] = useState(null);
    const [userProfileId, setUserProfileId] = useState(null);
    const [itemContainerId, setItemContainerId] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [userTags, setUserTags] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {
        const userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (userProfile && userProfile.id) {
            setUserProfileId(userProfile.id);
        };
        if (userProfileId) {
            getAllUserTags(userProfileId).then((tagsList) => {
                setUserTags(tagsList || []); // Ensure an array is set
            }).catch(error => {
                console.error("Error fetching tags:", error);
                setUserTags([]); // Fallback to an empty array to help prevent the .map error I got early on.
            });
        }
    }, [userProfileId]);

    const handleTagChange = (e) => {
        const selectedTag = e.target.value;
        setItemTagId(selectedTag === '(none)' ? null : selectedTag);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const item = {
            name: itemName,
            description: itemDescription,
            tagId: itemTagId,
            userProfileId: userProfileId,
            containerId: itemContainerId
        }
        try {
            await addItem(item).then(() => {
                setShowSuccessModal(true);
            });
        } catch (error) {
            console.error("There was an error while trying to add item:", error);
        }
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        navigate(`/items/${parseInt(userProfileId)}`);
    };


    return (
        <>
        <div className="flex flex-col items-center min-h-screen mt-6 md:-mt-20 sm:justify-center sm:pt-0">
        <div>
                <h2 className="text-center text-2xl md:text-3xl md:mb-10 font-bold leading-9 tracking-normal text-gray-900">
                        New Item
                </h2>
            <div className="w-full px-6 md:px-12 py-4 md:py-6 mt-6 overflow-hidden bg-zinc-700/20 shadow-md shadow-yellow-900/90 sm:max-w-md sm:rounded-lg">
                <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <label
                            htmlFor="itemName"
                            className="block text-md font-medium text-gray-700 undefined"
                        >
                            Item Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="itemName"
                                required
                                onChange={e => setItemName(e.target.value)}
                                autoComplete="itemName"
                                className="block w-full mt-1 pl-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="itemDescription"
                            className="block text-md font-medium text-gray-700 undefined"
                        >
                            Item Description
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="itemDescription"
                                required
                                onChange={e => setItemDescription(e.target.value)}
                                autoComplete="itemDescription"
                                className="block w-full mt-1 pl-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="itemTag"
                            className="block text-md font-medium text-gray-700 undefined"
                        >
                            Item Tag
                        </label>
                        <div className="flex flex-col items-start">
                            <select
                                name="itemTag"
                                onChange={handleTagChange}
                                className="block w-full mt-1 pl-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            >
                                <option value="(none)">(none)</option>
                                {userTags.map((tag) => (
                                    <option key={tag.id} value={tag.id}>
                                        {tag.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 ml-0 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                        >
                            Submit
                        </button>
                        <button
                            type="back"
                            className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-red-700/70 border border-transparent rounded-md active:bg-gray-900 false"
                            onClick={() => navigate(-1) }
                        >
                            Cancel
                        </button>

                    </div>
                </form>
            </div>
        </div>
    </div>
    <SuccessModal
        show={showSuccessModal}
        onClose={handleCloseSuccessModal}
        title={"Success"}
        message={"Item created successfully."}
    />

    </>
    );


}