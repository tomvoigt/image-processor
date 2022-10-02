import request from "supertest";
import app from "../..";

describe("GET /api", () => {
  it("should return a 403 when accessed", async () => {
    const response = await request(app).get("/api");

    expect(response.statusCode).toBe(403);
  });
});
