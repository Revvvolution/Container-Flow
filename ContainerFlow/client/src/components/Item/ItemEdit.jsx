import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { editItem, getItemById } from "../../services/ItemService.jsx";
import { useParams } from 'react-router-dom';
import { SuccessModal } from "../Modal/SuccessModal.jsx";
import { getAllUserTags } from "../../services/TagService.jsx";


export const ItemEdit = () => {
    const [form, setForm] = useState({
        id: '',
        name: '',
        description: '',
        tagId: null,
        userProfileId: '',
        containerId: null,
    });
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [userTags, setUserTags] = useState([]);
    const [userId, setUserId] = useState();


    const { id } = useParams();

    const navigate = useNavigate();


    useEffect(() => {
        getItemById(id).then((singleItem) => {
            setForm({
                id: singleItem.id || '',
                name: singleItem.name || '',
                description: singleItem.description || '',
                tagId: singleItem.tagId || null,
                userProfileId: singleItem.userProfileId || '',
                containerId: singleItem.containerId || null,
            });
        });
        const userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (userProfile && userProfile.id) {
            setUserId(userProfile.id);
        };
        if (userId) {
            getAllUserTags(userId).then((tagsList) => {
                setUserTags(tagsList || []); // Ensure an array is set
            }).catch(error => {
                console.error("Error fetching tags:", error);
                setUserTags([]); // Fallback to an empty array to help prevent the .map error I got early on.
            });
        };
    }, [userId]);

    const handleChange = (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    
    const handleTagChange = (e) => {
        const selectedTag = e.target.value;
        setForm(prev => ({
            ...prev,
            tagId: selectedTag === '(none)' ? null : selectedTag,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedItem = {
            id: parseInt(form.id),
            name: form.name,
            description: form.description,
            tagId: form.tagId ? parseInt(form.tagId) : null,
            userProfileId: parseInt(form.userProfileId),
            containerId: parseInt(form.containerId)
        };
        try {
            await editItem(updatedItem);
            setShowSuccessModal(true);
        } catch (error) {
            console.error("There was an error while trying to add item:", error);
        }
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        navigate(`/items/${form.userProfileId}`);
    };


    return (
        <>
        <div className="flex flex-col items-center min-h-screen mt-6 md:-mt-20 sm:justify-center sm:pt-0">
        <div>
                <h2 className="text-center text-2xl md:text-3xl md:mb-10 font-bold leading-9 tracking-normal text-gray-900">
                        Edit Item
                </h2>
            <div className="w-full px-6 md:px-12 py-4 md:py-6 mt-6 overflow-hidden bg-zinc-700/20 shadow-md shadow-yellow-900/90 sm:max-w-md sm:rounded-lg">
                <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <label
                            htmlFor="name"
                            className="block text-md font-medium text-gray-700 undefined"
                        >
                            Item Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Item Name"
                                required
                                className="block w-full mt-1 pl-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="description"
                            className="block text-md font-medium text-gray-700 undefined"
                        >
                            Item Description
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="description"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                placeholder="Item Description"
                                required
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
                                id="itemTag"
                                name="itemTag"
                                value={form.tagId || '(none)'}
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
                            type="button"
                            className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-red-700/70 border border-transparent rounded-md active:bg-gray-900 false"
                            onClick={() => {navigate(-1) }}
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
        message={"Item edited successfully."}
    />

    </>
    );


}