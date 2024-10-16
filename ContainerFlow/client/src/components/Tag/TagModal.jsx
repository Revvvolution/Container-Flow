import React from 'react';

export const TagModal = ({ show, onClose, onConfirm }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4">Delete Tag</h2>
                <p className="mb-4">Are you sure you want to delete this tag?</p>
                <div className="flex justify-end space-x-2">
                    <button 
                        onClick={onClose} 
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={onConfirm} 
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

