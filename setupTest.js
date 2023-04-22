// API Fetch JavaScript Library testings by Shakhbozbek Usmonov(Miracle Programmer)!

// GET Request
miracleApi
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

// POST Request
miracleApi
    .post("https://jsonplaceholder.typicode.com/posts", {
        title: "API Fetch JavaScript Library",
        body: "API Fetch JavaScript Library by Shakhbozbek Usmonov(Miracle Programmer)!",
        userId: 1,
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

// PUT Request
miracleApi
    .put("https://jsonplaceholder.typicode.com/posts/1", {
        title: "API Fetch JavaScript Library",
        body: "API Fetch JavaScript Library by Shakhbozbek Usmonov(Miracle Programmer)!",
        userId: 1,
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

// DELETE Request
miracleApi
    .delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
