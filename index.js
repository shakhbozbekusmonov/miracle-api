// API Fetch JavaScript Library by Shakhbozbek Usmonov(Miracle Programmer)!

// Fetch API
const miracleApi = {
    get: (url) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.send();
            xhr.responseType = "json";
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onloadend = () => {
                console.log("Request ended");
            };
            xhr.onloadstart = () => {
                console.log("Request started");
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.onprogress = (event) => {
                console.log(`Received ${event.loaded} of ${event.total}`);
            };
            xhr.onabort = () => {
                console.log("Request aborted");
            };
        });
    },
    post: (url, data) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(data));
            xhr.responseType = "json";
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onloadend = () => {
                console.log("Request ended");
            };
            xhr.onloadstart = () => {
                console.log("Request started");
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.onprogress = (event) => {
                console.log(`Received ${event.loaded} of ${event.total}`);
            };
            xhr.onabort = () => {
                console.log("Request aborted");
            };
        });
    },
    put: (url, data) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("PUT", url);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(data));
            xhr.responseType = "json";
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onloadend = () => {
                console.log("Request ended");
            };
            xhr.onloadstart = () => {
                console.log("Request started");
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.onprogress = (event) => {
                console.log(`Received ${event.loaded} of ${event.total}`);
            };
            xhr.onabort = () => {
                console.log("Request aborted");
            };
        });
    },
    delete: (url) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("DELETE", url);
            xhr.send();
            xhr.responseType = "json";
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onloadend = () => {
                console.log("Request ended");
            };
            xhr.onloadstart = () => {
                console.log("Request started");
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.onprogress = (event) => {
                console.log(`Received ${event.loaded} of ${event.total}`);
            };
            xhr.onabort = () => {
                console.log("Request aborted");
            };
        });
    },
};

module.exports = miracleApi;
