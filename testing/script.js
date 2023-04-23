const miracleApi = require("miracle-api");

miracleApi.get("https://jsonplaceholder.typicode.com/users", (data) => {
    console.log(data);
});
