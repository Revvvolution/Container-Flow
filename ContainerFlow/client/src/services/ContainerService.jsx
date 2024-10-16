const apiUrl = "https://localhost:5001/api/Container";


//fetch to get list of user's Containers
export const getAllUserContainers = (userId) => {
    return fetch(`${apiUrl}/GetAllUserContainers/${userId}`)
    .then((res) => res.json())
};

// Return a single container by its Id
export const getContainerById = (id) => {
    return fetch(`${apiUrl}/GetContainerById/${id}`)
    .then((res) => res.json())
};

// POST method for adding a new user-associated container to database
export const addContainer =  (singleContainer) => {
    return fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(singleContainer)
    });
};

export const deleteContainer = (id) => {
    return fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });
  };

export const editContainer = (singleContainer) => {
    return fetch(`${apiUrl}/Edit/${singleContainer.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleContainer)
    });
};