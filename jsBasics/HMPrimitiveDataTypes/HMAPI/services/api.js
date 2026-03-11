const axios = require("axios");

async function requestWithError() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/wrong-url"
        );
        return response.data;
    } catch (error) {
        return "Request failed";
    }
}

async function requestWithHeaders() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
            headers: {
                Authorization: "Bearer test-token",
            },
            params: {
                userId: 1,
            },
        }
    );

    return response.config;
}

async function getPosts() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );

    return response.data;
}

module.exports = {
    requestWithError,
    requestWithHeaders,
    getPosts,
};