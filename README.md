# Miracle API Fetch JavaScript Library

This library provides a simple and easy-to-use API for making HTTP requests in JavaScript. It supports the following HTTP methods:

- GET
- POST
- PUT
- DELETE
- PATCH

The library also supports the following features:

- Asynchronous requests
- Caching
- Error handling

## Installation

To install the library, run the following command in your terminal:

```sh
npm install miracle-api
```

# Usage

To make a request, use the miracleApi function. The function takes two arguments:

The URL of the resource you want to request
The request body (optional)
The following code makes a GET request to the JSONPlaceholder API:

```sh
const response = await miracleApi("https://jsonplaceholder.typicode.com/posts");
```

The response object contains the following properties:
status: The HTTP status code
statusText: The HTTP status message
body: The response body

Error handling
If an error occurs during the request, the miracleApi function will throw an error. The error object contains the following properties:
status: The HTTP status code
statusText: The HTTP status message
message: A message describing the error
Caching
The library supports caching requests. To enable caching, set the cache option to true when calling the miracleApi function. The following code makes a GET request to the JSONPlaceholder API and caches the response:

```sh
const response = await miracleApi("https://jsonplaceholder.typicode.com/posts", {
  cache: true,
});
```

# Example

The following code makes a GET request to the JSONPlaceholder API, prints the response body, and then makes another request to the same API. The second request will use the cached response body if it is available:

```sh
async function main() {
  const response1 = await miracleApi("https://jsonplaceholder.typicode.com/posts");
  console.log(response1.body);

  const response2 = await miracleApi("https://jsonplaceholder.typicode.com/posts");
  console.log(response2.body);
}

main();
```

# License

The API Fetch JavaScript Library is licensed under the MIT License.
