import React, { useEffect, useState } from 'react';
import { getAllUserTags } from '../../services/TagService.jsx';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { TagCard } from './TagCard.jsx';


export const TagList = () => {
    const [tags, setTags] = useState([]);

    const { id } = useParams();

    const navigate = useNavigate();


    useEffect(() => {
        getAllUserTags(id).then(tagsList => {
            console.log(tagsList);
            setTags(tagsList);
        });
    }, [id]);

    return (
        <>
        <div className="p-4">
            <h2 className="text-xl md:text-3xl font-bold mb-4">Tags for Items</h2>
            <Link to={`/tags/new/${id}`}>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-1 mb-5 md:px-2 md:py-2  sm:top-10 sm:left-10 z-0 hover:shadow-inner hover:shadow-slate-950">
                <span className="hidden md:inline-block">Add New Tag</span>
                <span className="md:hidden">+</span>
            </button>
            </Link>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {tags.map((tag) => (
                    <TagCard key={tag.id} tag={tag} />
                ))}
            </ul>
        </div>
        </>
    );
};
