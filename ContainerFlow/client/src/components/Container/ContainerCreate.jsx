import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addContainer } from "../../services/ContainerService.jsx";
import { useParams } from 'react-router-dom';
import { SuccessModal } from "../Modal/SuccessModal.jsx";


export const ContainerCreate = () => {
    const [containerName, setContainerName] = useState('');
    const [containerDescription, setContainerDescription] = useState('');
    const [userProfileId, setUserProfileId] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);


    const navigate = useNavigate();

    useEffect(() => {
        const userProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (userProfile && userProfile.id) {
            setUserProfileId(userProfile.id);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const container = {
            name: containerName,
            description: containerDescription,
            userProfileId: userProfileId
        }
        try {
            await addContainer(container).then(() => {
                setShowSuccessModal(true);
            });
        } catch (error) {
            console.error("There was an error while trying to add container:", error);
        }
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        navigate(`/containers/${parseInt(userProfileId)}`);
    };


    return (
        <>
        <div className="flex flex-col items-center min-h-screen mt-6 md:-mt-20 sm:justify-center sm:pt-0">
        <div>
                <h2 className="text-center text-2xl md:text-3xl md:mb-10 font-bold leading-9 tracking-normal text-gray-900">
                        New Container
                </h2>
            <div className="w-full px-6 md:px-12 py-4 md:py-6 mt-6 overflow-hidden bg-zinc-700/20 shadow-md shadow-yellow-900/90 sm:max-w-md sm:rounded-lg">
                <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <label
                            htmlFor="containerName"
                            className="block text-md font-medium text-gray-700 undefined"
                        >
                            Container Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="containerName"
                                required
                                onChange={e => setContainerName(e.target.value)}
                                autoComplete="containerName"
                                className="block w-full mt-1 pl-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="containerDescription"
                            className="block text-md font-medium text-gray-700 undefined"
                        >
                            Description
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="containerDescription"
                                required
                                onChange={e => setContainerDescription(e.target.value)}
                                autoComplete="containerDescription"
                                className="block w-full mt-1 pl-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
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
        message={"Container created successfully."}
    />

    </>
    );


}