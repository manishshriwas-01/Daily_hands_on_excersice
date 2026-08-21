import request from "supertest";
import mongoose from "mongoose";
import app from "../server.js";

describe("Task API", () => {

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI);
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    test("should create a new task", async () => {
        const response = await request(app)
            .post("/tasks")
            .send({
                title: "Learn Jest",
                status: "todo"
            });

        expect(response.status).toBe(201);

        expect(response.body.message).toBe(
            "Task created successfully"
        );

        expect(response.body.task).toBeDefined();
    });

    test("should get all tasks", async () => {
        const response = await request(app)
            .get("/tasks");

        expect(response.status).toBe(200);

        expect(Array.isArray(response.body)).toBe(true);
    });

    test("should return error when task data is missing", async () => {
        const response = await request(app)
            .post("/tasks")
            .send({});

        expect(response.statusCode).toBe(400);
    });

    test("should get a single task", async () => {
        const createResponse = await request(app)
            .post("/tasks")
            .send({
                title: "Task for single GET",
                status: "todo"
            });

        const taskId = createResponse.body.task._id;

        const response = await request(app)
            .get(`/tasks/${taskId}`);

        expect(response.status).toBe(200);
        expect(response.body._id).toBe(taskId);
        expect(response.body.title).toBe("Task for single GET");
    });

    test("should return 404 when task is not found", async () => {
        const fakeId = new mongoose.Types.ObjectId();

        const response = await request(app)
            .get(`/tasks/${fakeId}`);

        expect(response.status).toBe(404);
        expect(response.body.message).toBe("Task not found");
    });


    test("should update a task", async () => {
        const createResponse = await request(app)
            .post("/tasks")
            .send({
                title: "Old Title",
                status: "todo"
            });

        const taskId = createResponse.body.task._id;

        const response = await request(app)
            .put(`/tasks/${taskId}`)
            .send({
                title: "Updated Title",
                status: "done"
            });

        expect(response.status).toBe(200);

        expect(response.body.message).toBe(
            "Task updated successfully"
        );

        expect(response.body.task.title).toBe("Updated Title");
        expect(response.body.task.status).toBe("done");
    });

    test("should return 404 when updating a task that does not exist", async () => {
        const fakeId = new mongoose.Types.ObjectId();

        const response = await request(app)
            .put(`/tasks/${fakeId}`)
            .send({
                title: "Updated Task",
                status: "done"
            });

        expect(response.status).toBe(404);
        expect(response.body.message).toBe("Task not found");
    });

    test("should delete a task", async () => {
        const createResponse = await request(app)
            .post("/tasks")
            .send({
                title: "Task to delete",
                status: "todo"
            });

        const taskId = createResponse.body.task._id;

        const response = await request(app)
            .delete(`/tasks/${taskId}`);

        expect(response.status).toBe(200);

        expect(response.body.message).toBe(
            "Task deleted successfully"
        );
    });


    test("should return 404 when deleting a task that does not exist", async () => {
        const fakeId = new mongoose.Types.ObjectId();

        const response = await request(app)
            .delete(`/tasks/${fakeId}`);

        expect(response.status).toBe(404);
        expect(response.body.message).toBe("Task not found");
    });

});