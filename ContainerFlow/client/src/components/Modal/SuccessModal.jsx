import React from 'react';

export const SuccessModal = ({ show, onClose, message }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4">Success</h2>
                <p className="mb-4">{message}</p>
                <div className="flex justify-end">
                    <button 
                        onClick={onClose} 
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};
