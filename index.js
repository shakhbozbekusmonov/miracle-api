// API Fetch JavaScript Library by Shakhbozbek Usmonov(Miracle Programmer)!

// Fetch API
const miracleApi = {
    get: (url, callback) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => callback(data));
    },

    post: (url, data, callback) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => callback(data));
    },

    put: (url, data, callback) => {
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => callback(data));
    },

    delete: (url, callback) => {
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => callback(data));
    },

    patch: (url, data, callback) => {
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => callback(data));
    },
};

export default miracleApi;
