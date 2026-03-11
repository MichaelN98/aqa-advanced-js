const axios = require("axios");
const {
    requestWithError,
    requestWithHeaders,
    getPosts,
} = require("../services/api");

jest.mock("axios");

describe("Error handling test", () => {
    test("should handle error when wrong URL", async () => {
        axios.get.mockRejectedValue(new Error("404"));

        const result = await requestWithError();

        expect(result).toBe("Request failed");
    });
});

describe("Headers and params test", () => {
    test("should include headers and params", async () => {
        axios.get.mockResolvedValue({
            config: {
                headers: {
                    Authorization: "Bearer test-token",
                },
                params: {
                    userId: 1,
                },
            },
        });

        const result = await requestWithHeaders();

        expect(result.headers.Authorization).toBe("Bearer test-token");
        expect(result.params.userId).toBe(1);
    });
});

describe("Mock axios success request", () => {
    test("should return mocked posts", async () => {
        axios.get.mockResolvedValue({
            data: [{ id: 1, title: "test post" }],
        });

        const posts = await getPosts();

        expect(posts.length).toBe(1);
        expect(posts[0].title).toBe("test post");
    });
});