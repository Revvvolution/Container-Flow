import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContainerById } from "../../services/ContainerService";
import { getItemsByContainerId, editItem } from "../../services/ItemService";
import { ContainerItemCard } from "./ContainerItemCard.jsx";
import { SuccessModal } from "../Modal/SuccessModal.jsx";
import { AddItemModal } from "./AddItemModal.jsx";


export const ContainerDetails = () => {
    const { id } = useParams();
    const [container, setContainer] = useState({});
    const [items, setItems] = useState([]);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showAddItemModal, setShowAddItemModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        getContainerById(id).then(containerData => {
            setContainer(containerData);
        });

        getItemsByContainerId(id).then(itemsData => {
            setItems(itemsData);
        });
    }, [id]);

    const handleRemoveItem = (itemId) => {
        const itemToRemove = items.find(item => item.id === itemId);
        const updatedItem = { ...itemToRemove, containerId: null };
    
        editItem(updatedItem).then(() => {
            setItems(items.filter(item => item.id !== itemId));
            setSuccessMessage("Item removed from" + `${container.name}`)
            setShowSuccessModal(true);
        });
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
    };

    const handleAddItem = (item) => {
        const updatedItem = { ...item, containerId: id };
        editItem(updatedItem).then(() => {
            setItems([...items, updatedItem]);
            setShowAddItemModal(false);
            setSuccessMessage("Item added to" + `${container.name}`);
            setShowSuccessModal(true);
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-4">{container.name} Items</h1>
            <p className="text-lg text-center mb-8">{container.description}</p>
            <button onClick={() => setShowAddItemModal(true)} className="bg-green-600/80 hover:bg-green-600/90 text-white p-2 rounded mb-6">
                <span className="hidden md:inline-block">Add Item</span>
                <span className="md:hidden px-2">+</span>
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:mb-6 justify-items-center">
                {items.map(item => (
                    <ContainerItemCard key={item.id} item={item} onRemove={handleRemoveItem} />
                ))}
            </div>
            <SuccessModal
                show={showSuccessModal}
                onClose={handleCloseSuccessModal}
                title="Removed"
                message={`Item removed from ${container.name}`}
            />
            <AddItemModal
                show={showAddItemModal}
                onClose={() => setShowAddItemModal(false)}
                onAddItem={handleAddItem}
                userProfileId={container.userProfileId}
            />
        </div>
    );
};
