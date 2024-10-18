import React, { useEffect, useState } from 'react';
import { getLooseUserItems } from "../../services/ItemService";

export const AddItemModal = ({ show, onClose, onAddItem, userProfileId }) => {
    const [looseItems, setLooseItems] = useState([]);

    useEffect(() => {
        if (show) {
            getLooseUserItems(userProfileId).then(items => {
                setLooseItems(items);
            });
        }
    }, [show, userProfileId]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-gradient-to-t from-teal-300 to-slate-300 p-4 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-xl font-bold mb-4">Add Item</h2>
                <ul>
                    {looseItems.map(item => (
                        <li key={item.id} className="flex justify-between items-center mb-4">
                            <span className='font-bold'>{item.name}</span>
                            <button onClick={() => onAddItem(item)} className="bg-green-500 hover:bg-green-600/90 hover:shadow-inner hover:shadow-black text-white p-2 mb-1.5 rounded">
                                <span className='px-1.5'>+</span>
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-end mt-8">
                    <button onClick={onClose} className="bg-blue-600/80 hover:bg-blue-700/80 hover:shadow-inner hover:shadow-black text-white font-bold py-2 px-4 rounded">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};