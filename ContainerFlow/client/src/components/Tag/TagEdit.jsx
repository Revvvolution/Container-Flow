import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { editTag, getTagById } from "../../services/TagService.jsx";
import { useParams } from 'react-router-dom';


export const TagEdit = () => {
    const [form, setForm] = useState({
        id: '',
        name: '',
        userProfileId: '',
    });

    const { id } = useParams();

    const navigate = useNavigate();


    useEffect(() => {
        getTagById(id).then((singleTag) => {
            setForm({
                id: singleTag.id || '',
                name: singleTag.name || '',
                userProfileId: singleTag.userProfileId || '',
            });
        })
    }, [id]);

    const handleChange = (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedTag = {
            id: form.id,
            name: form.name,
            userProfileId: form.userProfileId
        };
        try {
            await editTag(updatedTag);
            window.alert("Changes saved successfully");
            navigate(`/tags/${form.userProfileId}`);
        } catch (error) {
            console.error("There was an error while trying to add tag:", error);
        }
    };


    return (
        <div className="flex flex-col items-center min-h-screen mt-6 md:-mt-20 sm:justify-center sm:pt-0">
        <div>
                <h2 className="text-center text-2xl md:text-3xl md:mb-10 font-bold leading-9 tracking-normal text-gray-900">
                        Edit Tag
                </h2>
            <div className="w-full px-6 md:px-12 py-4 md:py-6 mt-6 overflow-hidden bg-zinc-700/20 shadow-md shadow-yellow-900/90 sm:max-w-md sm:rounded-lg">
                <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <label
                            htmlFor="name"
                            className="block text-md font-medium text-gray-700 undefined"
                        >
                            Tag Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Tag Name"
                                required
                                className="block w-full mt-1 pl-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-red-700/70 border border-transparent rounded-md active:bg-gray-900 false"
                            onClick={() => {
                                window.alert("Changes cancelled");
                                 navigate(-1) }}
                        >
                            Cancel
                        </button>

                    </div>
                </form>
            </div>
        </div>
    </div>

    );


}