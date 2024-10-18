import React, { useEffect, useState } from 'react';
import { getAllUserContainers } from '../../services/ContainerService.jsx';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ContainerCard } from './ContainerCard.jsx';


export const ContainerList = () => {
    const [containers, setContainers] = useState([]);
    const [loading, setLoading] = useState(true);


    const { id } = useParams();

    const navigate = useNavigate();


    useEffect(() => {
        getAllUserContainers(id).then(containersList => {
            console.log(containersList);
            setContainers(containersList);
            setTimeout(() => {
                setLoading(false);
            }, 800);
        });
    }, [id]);

    return (
        <>
        {loading ? (
            <div className="p-4 flex flex-col items-center justify-center">
                <h2 className="text-xl md:text-3xl font-bold mb-4">My Containers</h2>
            <Link to={`/containers/new/${id}`}>
            <button className="bg-green-600/70 text-white px-4 py-2 rounded mt-1 mb-5 md:px-2 md:py-2  sm:top-10 sm:left-10 z-0 shadow-md shadow-black hover:shadow-sm hover:translate-y-1 hover:shadow-slate-950">
                <span className="hidden md:inline-block">Add New Container</span>
                <span className="md:hidden">+</span>
            </button>
            </Link>
                <div className="animate-spin flex items-center justify-center rounded-full w-10 h-10 bg-gradient-to-tr from-yellow-900 via-sky-900 to-slate-200">
                    <div className="h-6 w-6 rounded-full bg-cyan-200"></div>
                </div>
            </div>    
            ) : (
        <div className="p-4">
            <h2 className="text-xl md:text-3xl font-bold mb-4">My Containers</h2>
            <Link to={`/containers/new/${id}`}>
            <button className="bg-green-600/70 text-white px-4 py-2 rounded mt-1 mb-5 md:px-2 md:py-2  sm:top-10 sm:left-10 z-0 shadow-md shadow-black hover:shadow-sm hover:translate-y-1 hover:shadow-slate-950">
                <span className="hidden md:inline-block">Add New Container</span>
                <span className="md:hidden">+</span>
            </button>
            </Link>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {containers.map((container) => (
                    <ContainerCard key={container.id} container={container} />
                ))}
            </ul>
        </div>
            )}
        </>
    );
};
