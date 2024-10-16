const apiUrl = "https://localhost:5001/api/Tag";


//fetch to get list of user's Tags
export const getAllUserTags = (userId) => {
    return fetch(`${apiUrl}/GetAllUserTags/${userId}`)
    .then((res) => res.json())
};

// Return a single tag by its Id
export const getTagById = (id) => {
    return fetch(`${apiUrl}/GetTagById/${id}`)
    .then((res) => res.json())
};

// POST method for adding a new user-associated tag to database
export const addTag =  (singleTag) => {
    return fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(singleTag)
    });
};

export const deleteTag = (id) => {
    return fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });
  };

export const editTag = (singleTag) => {
    return fetch(`${apiUrl}/Edit/${singleTag.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleTag)
    });
};