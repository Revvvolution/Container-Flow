const apiUrl = "https://localhost:5001/api/Item";


//fetch to get list of user's items
export const getAllUserItems = (userId) => {
    return fetch(`${apiUrl}/GetAllUserItems/${userId}`)
    .then((res) => res.json())
};

//fetch to get list of user's items that are NOT in containers
export const getLooseUserItems = (userId) => {
    return fetch(`${apiUrl}/GetLooseItemsByUserId/${userId}`)
    .then((res) => res.json())
};

//fetch to get list of user's items that are in a specified container
export const getItemsByContainerId = (containerId) => {
    return fetch(`${apiUrl}/GetItemsByContainerId/${containerId}`)
    .then((res) => res.json())
};

// Return a single item by its Id
export const getItemById = (id) => {
    return fetch(`${apiUrl}/GetItemById/${id}`)
    .then((res) => res.json())
};

// POST method for adding a new user-associated item to database
export const addItem =  (singleItem) => {
    return fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(singleItem)
    });
};

export const deleteItem = (id) => {
    return fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });
  };

export const editItem = (singleItem) => {
    return fetch(`${apiUrl}/Edit/${singleItem.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleItem)
    });
};