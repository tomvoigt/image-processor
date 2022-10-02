import request from "supertest";
import app from "../..";

describe("GET /resize", () => {
  it("should transfer the image to the client", async () => {
    const response = await request(app).get(
      "/api/resize?filename=fjord&width=500&height=500"
    );

    expect(response.statusCode).toBe(200);
  });

  it("should return a 404 to the client when the file can not be found", async () => {
    const response = await request(app).get(
      "/api/resize?filename=missing&width=500&height=500"
    );

    expect(response.statusCode).toBe(404);
  });
});
