const apiUrl = "https://localhost:5001/api/UserProfile";

export const login = (userObject) => {
  return fetch(`${apiUrl}/getbyemail?email=${userObject.email}`)
    .then((r) => r.json())
    .then((userProfile) => {
        localStorage.setItem("userProfile", JSON.stringify(userProfile));
        return userProfile;
    });
};

export const logout = () => {
    localStorage.clear()
};

export const register = (userObject, password) => {
    return  fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    })
    .then((response) => response.json())
      .then((savedUserProfile) => {
        localStorage.setItem("userProfile", JSON.stringify(savedUserProfile))
      });
  };
  