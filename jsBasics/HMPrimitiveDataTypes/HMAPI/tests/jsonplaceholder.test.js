import axios from "axios";
import { describe, it, expect } from "vitest";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

describe("JSONPlaceholder API tests", () => {
    it("GET /posts - should return list of posts", async () => {
        const response = await api.get("/posts");

        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);

        expect(response.data[0]).toHaveProperty("userId");
        expect(response.data[0]).toHaveProperty("id");
        expect(response.data[0]).toHaveProperty("title");
        expect(response.data[0]).toHaveProperty("body");
    });

    it("GET /posts/1 - should return one post", async () => {
        const response = await api.get("/posts/1");

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data).toHaveProperty("userId");
        expect(response.data).toHaveProperty("title");
        expect(response.data).toHaveProperty("body");
    });

    it("GET /comments?postId=1 - should return comments for post 1", async () => {
        const response = await api.get("/comments", {
            params: { postId: 1 },
        });

        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);

        expect(response.data[0].postId).toBe(1);
        expect(response.data[0]).toHaveProperty("id");
        expect(response.data[0]).toHaveProperty("name");
        expect(response.data[0]).toHaveProperty("email");
        expect(response.data[0]).toHaveProperty("body");
    });

    it("POST /posts - should create a new post", async () => {
        const newPost = {
            title: "My test post",
            body: "This is a test body",
            userId: 1,
        };

        const response = await api.post("/posts", newPost);

        expect(response.status).toBe(201);
        expect(response.data.title).toBe(newPost.title);
        expect(response.data.body).toBe(newPost.body);
        expect(response.data.userId).toBe(newPost.userId);
        expect(response.data).toHaveProperty("id");
    });

    it("POST /comments - should create a new comment", async () => {
        const newComment = {
            postId: 1,
            name: "Mike",
            email: "mike@test.com",
            body: "This is a test comment",
        };

        const response = await api.post("/comments", newComment);

        expect(response.status).toBe(201);
        expect(response.data.postId).toBe(newComment.postId);
        expect(response.data.name).toBe(newComment.name);
        expect(response.data.email).toBe(newComment.email);
        expect(response.data.body).toBe(newComment.body);
        expect(response.data).toHaveProperty("id");
    });
});

