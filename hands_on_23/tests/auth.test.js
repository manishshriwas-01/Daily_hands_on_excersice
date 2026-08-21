import request from "supertest";
import mongoose from "mongoose";
import app from "../server.js";

describe("Auth API", () => {

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI);
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    test("should register a new user", async () => {
        const response = await request(app)
            .post("/auth/register")
            .send({
                name: "Jest User",
                email: `jest${Date.now()}@example.com`,
                password: "123456"
            });

        expect(response.status).toBe(201);

        expect(response.body.message).toBe(
            "User registered successfully"
        );

        expect(response.body.user).toBeDefined();
        expect(response.body.user.name).toBe("Jest User");
        expect(response.body.user.email).toContain("@example.com");
    });


    test("should return 400 when user already exists", async () => {
        const email = `duplicate${Date.now()}@example.com`;

        await request(app)
            .post("/auth/register")
            .send({
                name: "First User",
                email,
                password: "123456"
            });

        const response = await request(app)
            .post("/auth/register")
            .send({
                name: "Second User",
                email,
                password: "123456"
            });

        expect(response.status).toBe(400);

        expect(response.body.message).toBe(
            "User already exists"
        );
    });

    test("should login user with valid credentials", async () => {
        const email = `login${Date.now()}@example.com`;
        const password = "123456";

        // First create the user
        await request(app)
            .post("/auth/register")
            .send({
                name: "Login User",
                email,
                password
            });

        // Then login with the same credentials
        const response = await request(app)
            .post("/auth/login")
            .send({
                email,
                password
            });

        expect(response.status).toBe(200);

        expect(response.body.message).toBe(
            "Login successful"
        );

        expect(response.body.user).toBeDefined();
        expect(response.body.user.email).toBe(email);
    });

    test("should return 401 when password is incorrect", async () => {
        const email = `wrongpass${Date.now()}@example.com`;

        // Create user
        await request(app)
            .post("/auth/register")
            .send({
                name: "Wrong Password User",
                email,
                password: "123456"
            });

        // Login with wrong password
        const response = await request(app)
            .post("/auth/login")
            .send({
                email,
                password: "wrongpassword"
            });

        expect(response.status).toBe(401);

        expect(response.body.message).toBe(
            "Invalid email or password"
        );
    });

});