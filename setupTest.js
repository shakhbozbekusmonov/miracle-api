// Miracle api fetch library testing

miracleApi.get("https://jsonplaceholder.typicode.com/users", (data) => {
    console.log(data);
});

miracleApi.post(
    "https://jsonplaceholder.typicode.com/users",
    {
        name: "Miracle Programmer",
        email: "",
        website: "https://miracleprogrammer.com",
    },
    (data) => {
        console.log(data);
    }
);

miracleApi.put(
    "https://jsonplaceholder.typicode.com/users/1",
    {
        name: "Miracle Programmer",
        email: "",
        website: "https://miracleprogrammer.com",
    },
    (data) => {
        console.log(data);
    }
);
